import { useReducer } from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { useDimensions } from '../../hooks/useDimensions'
import { SelectField } from '../../components/input-fields/SelectField'
import { TextField, TextFieldData } from '../../components/input-fields/TextField'
import { Body2, Headline6, Subtitle2 } from '../../components/Texts'
import { GetPlanDto } from '../../dto/get-plans.dto'

enum ActionType {
    SET_ORIGIN_DDD = 'set-origin-ddd',
    SET_DESTINY_DDD = 'set-destiny-ddd',
    SET_TIME = 'set-time'
}

interface TextFieldAction {
    type: ActionType,
    payload: string
}

interface TextFieldState {
    originDdd: TextFieldData,
    destinyDdd: TextFieldData,
    time: TextFieldData
}

interface Props {
    style?: React.CSSProperties
    plans: Omit<GetPlanDto, 'id'>[]
}

function textFieldReducer(state: TextFieldState, action: TextFieldAction) {
    const { type, payload } = action
    const isPayloadOnlyNumbers = payload.match(/^[0-9]*$/gm)

    switch (type) {
        case ActionType.SET_ORIGIN_DDD:
            return {
                ...state,
                originDdd: {
                    value: payload,
                    helpText: isPayloadOnlyNumbers === null ? {
                        text: 'Apenas números',
                        error: true
                    } : undefined
                }
            }
        case ActionType.SET_DESTINY_DDD:
            return {
                ...state,
                destinyDdd: {
                    value: payload,
                    helpText: isPayloadOnlyNumbers === null ? {
                        text: 'Apenas números',
                        error: true
                    } : undefined
                }
            }
        case ActionType.SET_TIME:
            return {
                ...state,
                time: {
                    value: payload,
                    helpText: isPayloadOnlyNumbers === null ? {
                        text: 'Apenas números',
                        error: true
                    } : undefined
                }
            }
        default:
            return state
    }
}

const textFieldInitialState: TextFieldState = {
    destinyDdd: { value: '' },
    originDdd: { value: '' },
    time: { value: '' }
}

export function Card({ style, plans }: Props) {
    const [textFieldState, textFieldDispatch] = useReducer(textFieldReducer, textFieldInitialState)
    const { width } = useDimensions()

    function onOriginDddChange(value: string) {
        textFieldDispatch({
            type: ActionType.SET_ORIGIN_DDD,
            payload: value
        })
    }

    function onDestinyDddChange(value: string) {
        textFieldDispatch({
            type: ActionType.SET_DESTINY_DDD,
            payload: value
        })
    }

    function onTimeChange(value: string) {
        textFieldDispatch({
            type: ActionType.SET_TIME,
            payload: value
        })
    }

    return <Container style={style}>
        {
            width > 426 ?
                <>
                    <Headline6 style={{ color: COLOR.highEmphasis, margin: '0 0 32px 0' }}>Veja o quanto você economiza</Headline6>
                    <TextFieldContainer>
                        <TextField style={{ margin: '0 16px 0 0' }} label='DDD de Origem' data={textFieldState.originDdd} onChange={onOriginDddChange} />
                        <TextField label='DDD de Destino' data={textFieldState.destinyDdd} onChange={onDestinyDddChange} />
                    </TextFieldContainer>
                    <TextFieldContainer style={{ margin: '32px 0 0 0' }}>
                        <TextField style={{ margin: '0 16px 0 0' }} label='Tempo (em minutos)' data={textFieldState.time} onChange={onTimeChange} />
                        <SelectField label='Plano' options={plans.map(plan => plan.name)} />
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
                            <TableText>R$ 28,00</TableText>
                        </TableTextContainer>
                        <TableTextContainer style={{ borderRadius: '0 4px 0 4px' }}>
                            <TableText>R$ 45,00</TableText>
                        </TableTextContainer>
                    </TitlesContainer>
                </>
                :
                <>
                    <Headline6 style={{ color: COLOR.highEmphasis, margin: '0 0 32px 0' }}>Veja o quanto você economiza</Headline6>
                    <TextField width='100%' style={{ margin: '0 0 32px 0' }} label='DDD de Origem' data={textFieldState.originDdd} onChange={onOriginDddChange} />
                    <TextField width='100%' style={{ margin: '0 0 32px 0' }} label='DDD de Destino' data={textFieldState.destinyDdd} onChange={onDestinyDddChange} />
                    <TextField width='100%' style={{ margin: '0 0 32px 0' }} label='Tempo (em minutos)' data={textFieldState.time} onChange={onTimeChange} />
                    <SelectField width='100%' label='Plano' options={plans.map(plan => plan.name)} />
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
                            <TableText>R$ 0,00</TableText>
                        </TableTextContainer>
                        <TableTextContainer style={{ borderRadius: '0 4px 0 4px' }}>
                            <TableText>R$ 0,00</TableText>
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