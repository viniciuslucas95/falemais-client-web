import { useReducer, useState } from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { useDimensions } from '../../hooks/useDimensions'
import { SelectField } from '../../components/input-fields/SelectField'
import { TextField } from '../../components/input-fields/TextField'
import { Body2, Headline6, Subtitle2 } from '../../components/Texts'
import { GetPlanDto } from '../../dto/get-plans.dto'
import { ActionType, textFieldInitialState, textFieldReducer } from './text-field-reducer'
import { GetTariffDto } from '../../dto/get-tariff.dto'
import { getPricePerMin } from './helper/get-price-per-min.helper'

interface Props {
    style?: React.CSSProperties
    plans: Omit<GetPlanDto, 'id'>[]
    tariffs: GetTariffDto[]
}

export function Card({ style, plans, tariffs }: Props) {
    const [textFieldState, textFieldDispatch] = useReducer(textFieldReducer, textFieldInitialState)
    const { width } = useDimensions()
    const { destinyDdd, originDdd, time } = textFieldState
    const [plan, setPlan] = useState<Omit<GetPlanDto, 'id'>>({ name: 'Nenhum', bonus: 0 })
    const { withPlan, withoutPlan } = getPricePerMin(originDdd, destinyDdd, time, plan.bonus, tariffs)

    function onDataChange(action: ActionType, value: string) {
        textFieldDispatch({
            type: action,
            payload: value
        })
    }

    const onOriginDddChange = (value: string) => { onDataChange(ActionType.SET_ORIGIN_DDD, value) }
    const onDestinyDddChange = (value: string) => { onDataChange(ActionType.SET_DESTINY_DDD, value) }
    const onTimeChange = (value: string) => { onDataChange(ActionType.SET_TIME, value) }

    function onPlanChange(name: string) {
        const selectedPlan = plans.find(plan => {
            if (plan.name === name) return plan.bonus
        })

        const bonus = selectedPlan ? selectedPlan.bonus : 0

        setPlan({
            name,
            bonus
        })
    }

    return <Container style={style}>
        {
            width > 426 ?
                <>
                    <Headline6 style={{ color: COLOR.highEmphasis, margin: '0 0 32px 0' }}>Veja o quanto você economiza</Headline6>
                    <TextFieldContainer>
                        <TextField style={{ margin: '0 16px 0 0' }} label='DDD de Origem' data={originDdd} onChange={onOriginDddChange} />
                        <TextField label='DDD de Destino' data={destinyDdd} onChange={onDestinyDddChange} />
                    </TextFieldContainer>
                    <TextFieldContainer style={{ margin: '32px 0 0 0' }}>
                        <TextField style={{ margin: '0 16px 0 0' }} label='Tempo (em minutos)' data={time} onChange={onTimeChange} />
                        <SelectField label='Plano' data={{
                            options: plans.map(plan => plan.name),
                            selectedOption: plan.name,
                            onOptionChange: onPlanChange
                        }} />
                    </TextFieldContainer>
                    <Separator />
                    <TitlesContainer>
                        <TableTitleContainer style={{ borderRadius: '4px 0 0 0' }}>
                            <TableTitle >Com plano</TableTitle>
                        </TableTitleContainer>
                        <TableTitleContainer style={{ borderRadius: '0 4px 0 0' }}>
                            <TableTitle >Sem plano</TableTitle>
                        </TableTitleContainer>
                    </TitlesContainer>
                    <TitlesContainer>
                        <TableTextContainer style={{ borderRadius: '0 0 0 4px' }}>
                            <TableText>{withPlan}</TableText>
                        </TableTextContainer>
                        <TableTextContainer style={{ borderRadius: '0 4px 0 4px' }}>
                            <TableText>{withoutPlan}</TableText>
                        </TableTextContainer>
                    </TitlesContainer>
                </>
                :
                <>
                    <Headline6 style={{ color: COLOR.highEmphasis, margin: '0 0 32px 0' }}>Veja o quanto você economiza</Headline6>
                    <TextField width='100%' style={{ margin: '0 0 32px 0' }} label='DDD de Origem' data={originDdd} onChange={onOriginDddChange} />
                    <TextField width='100%' style={{ margin: '0 0 32px 0' }} label='DDD de Destino' data={destinyDdd} onChange={onDestinyDddChange} />
                    <TextField width='100%' style={{ margin: '0 0 32px 0' }} label='Tempo (em minutos)' data={time} onChange={onTimeChange} />
                    <SelectField width='100%' label='Plano' data={{
                        options: plans.map(plan => plan.name),
                        selectedOption: plan.name,
                        onOptionChange: onPlanChange
                    }} />
                    <Separator />
                    <TitlesContainer>
                        <TableTitleContainer style={{ borderRadius: '4px 0 0 0' }}>
                            <TableTitle >Com plano</TableTitle>
                        </TableTitleContainer>
                        <TableTitleContainer style={{ borderRadius: '0 4px 0 0' }}>
                            <TableTitle >Sem plano</TableTitle>
                        </TableTitleContainer>
                    </TitlesContainer>
                    <TitlesContainer>
                        <TableTextContainer style={{ borderRadius: '0 0 0 4px' }}>
                            <TableText>{withPlan}</TableText>
                        </TableTextContainer>
                        <TableTextContainer style={{ borderRadius: '0 4px 0 4px' }}>
                            <TableText>{withoutPlan}</TableText>
                        </TableTextContainer>
                    </TitlesContainer>
                </>
        }
    </Container>
}

const Container = styled.div`
    padding: 32px;
    background-color: ${COLOR.neutral};
    width: fit-content;
    border-radius: 4px;
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 20%);

    @media screen and (max-width: 426px){
        width: 100%;
        padding: 0 32px;
        box-shadow: none;
    }
`

const TextFieldContainer = styled.div`
    display: flex;
`

const Separator = styled.div`
    width: 100%;
    height: 1px;
    margin: 32px 0;
    padding: 0 32px;
    background-color: ${COLOR.textFieldContainer};
`

const TitlesContainer = styled.div`
    display: flex;
    justify-content: stretch;
`

const TableTitleContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: ${COLOR.primary};
    padding: 16px;
`

const TableTitle = styled(Subtitle2)`
    color: ${COLOR.neutral};
`

const TableTextContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: ${COLOR.textFieldContainer};
    padding: 16px;
`

const TableText = styled(Body2)`
    color: ${COLOR.mediumEmphasis}
`