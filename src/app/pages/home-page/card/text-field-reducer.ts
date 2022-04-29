import { TextFieldData } from "../../../components/input-fields/TextField"

export enum ActionType {
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

export const textFieldInitialState: TextFieldState = {
    destinyDdd: { value: '' },
    originDdd: { value: '' },
    time: { value: '' }
}

export function textFieldReducer(state: TextFieldState, action: TextFieldAction) {
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