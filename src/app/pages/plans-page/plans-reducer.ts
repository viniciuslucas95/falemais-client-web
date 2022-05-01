import { TextFieldData } from "../../components/input-fields/TextField"

export enum ActionType {
    SET_NAME = 'set-name',
    SET_BONUS = 'set-bonus'
}

interface TextFieldAction {
    type: ActionType,
    payload: string
}

interface TextFieldState {
    name: TextFieldData,
    bonus: TextFieldData
}

export const plansInitialState: TextFieldState = {
    name: { value: '' },
    bonus: { value: '' }
}

export function plansReducer(state: TextFieldState, action: TextFieldAction) {
    const { type, payload } = action

    switch (type) {
        case ActionType.SET_NAME:
            const hasCharacters = payload.match(/\S/m)

            return {
                ...state,
                name: {
                    value: payload,
                    helpText: hasCharacters === null ? {
                        text: 'Nome vazio',
                        error: true
                    } : undefined
                }
            }
        case ActionType.SET_BONUS:
            const isNumberOnly = payload.match(/^[0-9]*$/gm);

            return {
                ...state,
                bonus: {
                    value: payload,
                    helpText: isNumberOnly === null ? {
                        text: 'Apenas números',
                        error: true
                    } : undefined
                }
            }
        default:
            return state
    }
}