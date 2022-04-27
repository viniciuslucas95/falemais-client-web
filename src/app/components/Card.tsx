import { useReducer } from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants/color.constant'
import { useDimensions } from '../hooks/useDimensions'
import { TextField, TextFieldData } from './TextField'
import { Headline6 } from './Texts'

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

export function Card() {
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

    return <Container>
        <Title style={{ margin: '0 0 32px 0' }}>Cálculo de gastos</Title>
        {
            width > 424 ?
                <>
                    <TextFieldContainer>
                        <TextField style={{ margin: '0 16px 0 0' }} label='DDD de Origem' data={textFieldState.originDdd} onChange={onOriginDddChange} />
                        <TextField label='DDD de Destino' data={textFieldState.destinyDdd} onChange={onDestinyDddChange} />
                    </TextFieldContainer>
                    <TextFieldContainer style={{ margin: '32px 0 0 0' }}>
                        <TextField label='Tempo (em minutos)' data={textFieldState.time} onChange={onTimeChange} />
                    </TextFieldContainer></>
                : null
        }

    </Container>
}

const Container = styled.div`
    padding: 32px;
    background-color: ${COLOR.neutral};
    border-radius: 4px;
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 20%);
`

const TextFieldContainer = styled.div`
    display: flex;
`

const Title = styled(Headline6)`
    color: ${COLOR.highEmphasis};
`