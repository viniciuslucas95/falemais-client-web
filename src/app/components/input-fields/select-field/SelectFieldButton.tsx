import styled from 'styled-components'
import { COLOR } from '../../../constants/color.constant'
import { Body2 } from '../../Texts'
import { Button } from '../../buttons/Button'

interface Props {
    onClick: () => void
    index: number
    text: string
}

export function SelectFieldButton({ index, onClick, text }: Props) {
    return <StyledButton
        content={{ text: <Body2>{text}</Body2> }}
        key={index}
        onClick={onClick}
        style={{ justifyContent: 'flex-start' }}
    />
}

const StyledButton = styled(Button)`
    color: ${COLOR.primary};
    background-color: ${COLOR.neutral};
    outline-color: ${COLOR.highEmphasis};

    :hover{
        background-color: ${COLOR.neutralHover};
    }

    :active{
        background-color: ${COLOR.neutralActive};
    }
`