import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { Button as Text } from '../Texts'

export interface Content {
    text?: string | JSX.Element
    icon?: JSX.Element
}

interface Props {
    content: Content
    style?: React.CSSProperties
    onClick: () => void
    onBlur?: () => void
    onFocus?: () => void
    className?: string
}

export function Button({ className, content, style, onFocus, onBlur, onClick }: Props) {
    const { icon, text } = content

    return <StyledButton
        className={className}
        onBlur={onBlur}
        onFocus={onFocus}
        onClick={onClick}
        style={style}
        hasIcon={icon ? true : false}
        hasText={text ? true : false}>
        {
            icon ?
                <IconContainer hasText={text ? true : false}>
                    {icon}
                </IconContainer>
                : null
        }
        {
            text ?
                typeof text === 'string' ?
                    <Text>{text}</Text>
                    : text
                : null
        }
    </StyledButton>
}

interface TextProps {
    hasText: boolean
}

interface ButtonProps extends TextProps {
    hasIcon: boolean
}

const StyledButton = styled.button<ButtonProps>`
    display: flex;
    height: 36rem;
    padding: ${({ hasIcon, hasText }) => hasIcon && hasText ? '0 16rem 0 12rem' : !hasIcon && hasText ? '0 16rem' : '0'};
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    border-width: 0rem;
    background-color: ${COLOR.primary};
    color: ${COLOR.neutral};
    outline-color: ${COLOR.highEmphasis};
    cursor: pointer;

    :hover{
        background-color: ${COLOR.primaryHover};
    }

    :active{
        background-color: ${COLOR.primaryActive};
    }
`

const IconContainer = styled.div<TextProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${({ hasText }) => hasText ? '8rem' : 0};
`