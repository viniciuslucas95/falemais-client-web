import { TextFieldData } from "../../../components/input-fields/TextField"
import { GetTariffDto } from "../../../dto/get-tariff.dto"

interface PlansResult {
    withPlan: string,
    withoutPlan: string
}

function getDataValue(data: TextFieldData) {
    const { value, helpText } = data
    if (helpText) if (helpText.error) return undefined

    const parsedValue = parseInt(value)

    return isNaN(parsedValue) ? undefined : parsedValue
}

export function getPricePerMin(originDddData: TextFieldData, destinyDddData: TextFieldData, timeData: TextFieldData, bonus: number, tariffs: Omit<GetTariffDto, 'id'>[]): PlansResult {
    const originDdd = getDataValue(originDddData)
    const destinyDdd = getDataValue(destinyDddData)
    const time = getDataValue(timeData)

    if (!originDdd || !destinyDdd || !time) return { withPlan: '-', withoutPlan: '-' }

    const selectedTariff = tariffs.find(tariff => tariff.originDdd === originDdd && tariff.destinyDdd === destinyDdd)

    if (!selectedTariff) return { withPlan: '-', withoutPlan: '-' }

    const { pricePerMin } = selectedTariff

    const withPlanValue = () => {
        if (time <= bonus) return '0,00'

        const diference = time - bonus
        const total = diference * pricePerMin
        const addition = total * 10 / 100
        const resultString = (total + addition).toFixed(2).replace('.', ',')

        return resultString
    }

    const withoutPlanValue = () => {
        return (time * pricePerMin).toFixed(2).replace('.', ',')
    }

    const withoutPlan = `R$ ${withoutPlanValue()}`
    const withPlan = `R$ ${withPlanValue()}`

    return {
        withoutPlan,
        withPlan
    }
}