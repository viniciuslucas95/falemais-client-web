import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { Caption } from '../Texts'
import { Label } from './select-field/Label'

interface TextFieldHelpText {
    text: string,
    error?: boolean
}

export interface TextFieldData {
    value: string,
    helpText?: TextFieldHelpText,
}

interface Props {
    label: string
    data: TextFieldData
    onChange: (value: string) => void
    style?: React.CSSProperties
    className?: string
}

export function TextField({ className, style, label, data, onChange }: Props) {
    const [isFocused, setIsFocused] = useState(false)
    const { value, helpText } = data
    const error = helpText !== undefined ? (helpText.error ?? false) : false

    return <Container className={className} style={style}>
        <StyledTextField
            isFocused={isFocused}
            hasError={error}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={value}
            onChange={({ target: { value } }) => onChange(value)} />
        {helpText ? <HelperText hasError={error}>{helpText.text}</HelperText> : null}
        <Label hasError={error} isFocused={isFocused}>{label}</Label>
    </Container>
}

interface ErrorProps {
    hasError: boolean
}

interface FocusProps {
    isFocused: boolean
}

const Container = styled.div`
    position: relative;
`

const StyledTextField = styled.input<ErrorProps & FocusProps>`
    outline-color: ${({ hasError }) => hasError ? COLOR.error : COLOR.primary};
    height: 48rem;
    padding: 4rem 16rem 0rem 16rem;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 14rem;
    letter-spacing: 0.5rem;
    color: ${({ isFocused }) => isFocused ? COLOR.highEmphasis : COLOR.mediumEmphasis};
    border-color: ${({ hasError }) => hasError ? COLOR.error : COLOR.disabled};
    border-radius: 4rem;
    border-style: solid;
    background-color: ${COLOR.neutral};
`

const HelperText = styled(Caption) <ErrorProps>`
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    padding: 4rem 16rem;
    color: ${({ hasError }) => hasError ? COLOR.error : COLOR.disabled};
`