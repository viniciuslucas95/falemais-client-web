import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants/color.constant'
import { Button as Text } from './Texts'

interface Content {
    text?: string | JSX.Element
    icon?: JSX.Element
}

interface Color {
    content: string
    background: string
    backgroundHover: string
    backgroundActive: string
    outline: string
}

interface CommonProps {
    forceMinWidth?: boolean
    buttonColor?: Color
    hasShadow?: boolean
    hideInteractivity?: boolean
    justifyContent?: string
}

interface Props extends CommonProps {
    content: Content
    style?: React.CSSProperties
    onClick: () => void
    onBlur?: () => void
    onFocus?: () => void
}

const defaultColor: Color = {
    background: COLOR.primary,
    backgroundHover: COLOR.primaryHover,
    backgroundActive: COLOR.primaryActive,
    content: COLOR.neutral,
    outline: COLOR.highEmphasis
}

export function Button({ justifyContent, onFocus, style, onBlur, content, buttonColor = defaultColor, forceMinWidth = false, hasShadow = true, onClick, hideInteractivity }: Props) {
    const { icon, text } = content

    return <StyledButton
        justifyContent={justifyContent ?? 'center'}
        onBlur={onBlur}
        onFocus={onFocus}
        hideInteractivity={hideInteractivity ?? false}
        onClick={() => onClick()}
        buttonColor={buttonColor ?? defaultColor} style={style}
        hasShadow={hasShadow}
        forceMinWidth={forceMinWidth}
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

interface IIconContainer {
    hasText: boolean
}

interface IButtonContainer extends IIconContainer, Required<CommonProps> {
    hasIcon: boolean
}

const StyledButton = styled.button<IButtonContainer>`
    display: flex;
    height: 36px;
    width: ${({ forceMinWidth }) => forceMinWidth ? '36px' : 'auto'};
    padding: ${({ hasIcon, hasText }) => hasIcon && hasText ? '0 16px 0 12px' : !hasIcon && hasText ? '0 16px' : '0'};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: center;
    border-radius: 4px;
    border-width: 0px;
    background-color: ${({ buttonColor: { background } }) => background};
    color: ${({ buttonColor: { content } }) => content};
    box-shadow: ${({ hasShadow }) => hasShadow ? '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)' : 0};
    outline-color: ${({ buttonColor: { outline } }) => outline};
    cursor: pointer;

    :hover {
        background-color: ${({ buttonColor: { backgroundHover, background }, hideInteractivity }) => hideInteractivity ? background : backgroundHover};
    }

    :active {
        background-color: ${({ buttonColor: { backgroundActive, background }, hideInteractivity }) => hideInteractivity ? background : backgroundActive};
        
    }
`

const IconContainer = styled.div<IIconContainer>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${({ hasText }) => hasText ? '8px' : 0};
`