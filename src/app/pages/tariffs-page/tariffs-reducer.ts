import { TextFieldData } from "../../components/input-fields/TextField"

export enum ActionType {
    SET_ORIGIN_DDD = 'set-origin-ddd',
    SET_DESTINY_DDD = 'set-destiny-ddd',
    SET_PRICE_PER_MIN = 'set-price-per-min'
}

interface TextFieldAction {
    type: ActionType,
    payload: string
}

interface TextFieldState {
    originDdd: TextFieldData,
    destinyDdd: TextFieldData,
    pricePerMin: TextFieldData
}

export const tariffsInitialState: TextFieldState = {
    destinyDdd: { value: '' },
    originDdd: { value: '' },
    pricePerMin: { value: '' }
}

export function tariffsReducer(state: TextFieldState, action: TextFieldAction) {
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
        case ActionType.SET_PRICE_PER_MIN:
            const isPrice = payload.match(/^[0-9]*$|^[0-9]{1,},[0-9]{1,2}$/gm);

            return {
                ...state,
                pricePerMin: {
                    value: payload,
                    helpText: isPrice === null ? {
                        text: 'Apenas formato de dinheiro',
                        error: true
                    } : undefined
                }
            }
        default:
            return state
    }
}