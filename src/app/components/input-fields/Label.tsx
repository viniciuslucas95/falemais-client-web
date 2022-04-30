import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { Caption } from '../Texts'

interface LabelProps {
    isFocused: boolean
    hasError?: boolean
}

interface Props extends LabelProps {
    children: string
}

export function Label({ isFocused, hasError = false, children }: PropsWithChildren<Props>) {
    return <LabelContainer>
        <LabelText isFocused={isFocused} hasError={hasError}>{children}</LabelText>
    </LabelContainer>
}

const LabelContainer = styled.div`
    position: absolute;
    left: 12rem;
    top: 0;
    transform: translateY(-50%);
    padding: 0 4rem;
    background-color: ${COLOR.neutral};
`

const LabelText = styled(Caption) <Required<LabelProps>>`
    color: ${({ hasError, isFocused }) => hasError ? COLOR.error : isFocused ? COLOR.primary : COLOR.disabled}
`