import { useEffect, useReducer, useRef, useState } from 'react'
import styled from 'styled-components'
import { ActionType, textFieldInitialState, textFieldReducer } from './text-field-reducer'
import { getPricePerMin } from './helper/get-price-per-min.helper'
import { GetTariffDto } from '../../../dto/get-tariff.dto'
import { GetPlanDto } from '../../../dto/get-plans.dto'
import { SelectField } from '../../../components/input-fields/SelectField'
import { TextField } from '../../../components/input-fields/TextField'
import { COLOR } from '../../../constants/color.constant'
import { Subtitle2, Body2 } from '../../../components/Texts'
import { Card } from '../../Card'

interface Props {
    plans: Omit<GetPlanDto, 'id'>[]
    tariffs: Omit<GetTariffDto, 'id'>[]
    style?: React.CSSProperties
    className?: string
}

const INPUT_FIELD_WIDTH = 160;

export function HomeCard({ className, style, plans, tariffs }: Props) {
    const [textFieldState, textFieldDispatch] = useReducer(textFieldReducer, textFieldInitialState)
    const { destinyDdd, originDdd, time } = textFieldState
    const [plan, setPlan] = useState<Omit<GetPlanDto, 'id'>>({ name: '', bonus: 0 })
    const { withPlan, withoutPlan } = getPricePerMin(originDdd, destinyDdd, time, plan.bonus, tariffs)
    const hasFetchedData = useRef(false)

    useEffect(() => {
        if (hasFetchedData.current) return
        if (plans.length === 0) return

        hasFetchedData.current = true

        setPlan({
            bonus: plans[0].bonus,
            name: plans[0].name
        })
    }, [tariffs])

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

    const firstSection = <>
        <FieldsContainer>
            <StyledTextField label='DDD de Origem' data={originDdd} onChange={onOriginDddChange} />
            <StyledTextField label='DDD de Destino' data={destinyDdd} onChange={onDestinyDddChange} />
            <StyledTextField label='Tempo (em minutos)' data={time} onChange={onTimeChange} />
            <StyledSelectField label='Plano' data={{
                options: plans.map(plan => plan.name),
                selectedOption: plan.name,
                onOptionChange: onPlanChange
            }} />
        </FieldsContainer>
    </>

    const secondSection = <>
        <TitlesContainer style={{ marginTop: '32px' }}>
            <TableTitleContainer style={{ borderRadius: '4px 0 0 0' }}>
                <TableTitle>Com plano</TableTitle>
            </TableTitleContainer>
            <TableTitleContainer style={{ borderRadius: '0 4px 0 0' }}>
                <TableTitle>Sem plano</TableTitle>
            </TableTitleContainer>
        </TitlesContainer>
        <TitlesContainer>
            <TableTextContainer style={{ borderRadius: '0 0 0 4px' }}>
                <TableText>{withPlan}</TableText>
            </TableTextContainer>
            <TableTextContainer style={{ borderRadius: '0 0 4px 0' }}>
                <TableText>{withoutPlan}</TableText>
            </TableTextContainer>
        </TitlesContainer>
    </>

    return <Card title='Veja o quanto você economiza' style={style} className={className} firstSection={firstSection} secondSection={secondSection} />
}

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
    background-color: ${COLOR.disabledLighter};
    padding: 16px;
`

const TableText = styled(Body2)`
    color: ${COLOR.mediumEmphasis};
`

const FieldsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: ${INPUT_FIELD_WIDTH * 2 + 32 + 'px'};
    max-width: 100%;

    @media screen and (max-width: 427px) {
        flex-direction: column;
    }
`

const StyledTextField = styled(TextField)`
    margin: 0 0 32px 0;
    width: ${INPUT_FIELD_WIDTH + 'px'};

    @media screen and (max-width: 427px) {
        width: 100%;
    }
`

const StyledSelectField = styled(SelectField)`
    margin: 0 0 32px 0;
    width: ${INPUT_FIELD_WIDTH + 'px'};

    @media screen and (max-width: 427px) {
        width: 100%;
    }
`