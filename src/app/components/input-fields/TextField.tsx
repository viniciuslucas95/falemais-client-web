import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { Caption } from '../Texts'
import { Label } from './Label'

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
    width?: string
}

export function TextField({ width, style, label, data, onChange }: Props) {
    const [isFocused, setIsFocused] = useState(false)
    const { value, helpText } = data
    const error = helpText !== undefined ? (helpText.error ?? false) : false

    return <Container width={width ?? '160px'} style={style}>
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

interface WidthProps {
    width: string
}

const Container = styled.div<WidthProps>`
    position: relative;
    width: ${({ width }) => width};
`

const StyledTextField = styled.input<ErrorProps & FocusProps>`
    outline-color: ${({ hasError }) => hasError ? COLOR.error : COLOR.primary};
    height: 48px;
    padding: 4px 16px 0px 16px;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    letter-spacing: 0.5px;
    color: ${({ isFocused }) => isFocused ? COLOR.highEmphasis : COLOR.mediumEmphasis};
    border-color: ${({ hasError }) => hasError ? COLOR.error : COLOR.disabled};
    border-radius: 4px;
    border-style: solid;
    background-color: ${COLOR.neutral};
`

const HelperText = styled(Caption) <ErrorProps>`
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    padding: 4px 16px;
    color: ${({ hasError }) => hasError ? COLOR.error : COLOR.disabled};
`