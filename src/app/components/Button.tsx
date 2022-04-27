import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants/color.constant'
import { Button as Text } from './Texts'

interface IContent {
    text?: string
    icon?: JSX.Element
}

interface IColor {
    content: string
    background: string
    backgroundHover: string
    backgroundActive: string
    outline: string
}

interface ICommonProps {
    forceMinWidth?: boolean
    buttonColor?: IColor
    hasShadow?: boolean
}

interface IProps extends ICommonProps {
    content: IContent
    style?: React.CSSProperties
    onClick: Function
}

const defaultColor: IColor = {
    background: COLOR.primary,
    backgroundHover: COLOR.primaryHover,
    backgroundActive: COLOR.primaryActive,
    content: COLOR.neutral,
    outline: COLOR.highEmphasis
}

export function Button({ style, content, buttonColor: color = defaultColor, forceMinWidth = false, hasShadow = true, onClick }: IProps) {
    const { icon, text } = content

    return <StyledButton onClick={() => onClick()} buttonColor={color ?? defaultColor} style={style} hasShadow={hasShadow} forceMinWidth={forceMinWidth} hasIcon={icon ? true : false} hasText={text ? true : false}>
        {
            icon ?
                <IconContainer hasText={text ? true : false}>
                    {icon}
                </IconContainer>
                : null
        }
        {
            text ?
                <Text>{text}</Text>
                : null
        }
    </StyledButton>
}

interface IIconContainer {
    hasText: boolean
}

interface IButtonContainer extends IIconContainer, Required<ICommonProps> {
    hasIcon: boolean
}

const StyledButton = styled.button<IButtonContainer>`
    display: flex;
    height: 36px;
    width: ${({ forceMinWidth }) => forceMinWidth ? '36px' : 'auto'};
    padding: ${({ hasIcon, hasText }) => hasIcon && hasText ? '0 16px 0 12px' : !hasIcon && hasText ? '0 16px' : '0'};
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border-width: 0px;
    background-color: ${({ buttonColor: { background } }) => background};
    color: ${({ buttonColor: { content } }) => content};
    box-shadow: ${({ hasShadow }) => hasShadow ? '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)' : 0};
    outline-color: ${({ buttonColor: { outline } }) => outline};
    cursor: pointer;

    :hover {
        background-color: ${({ buttonColor: { backgroundHover } }) => backgroundHover};
    }

    :active {
        background-color: ${({ buttonColor: { backgroundActive } }) => backgroundActive};
    }
`

const IconContainer = styled.div<IIconContainer>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${({ hasText }) => hasText ? '8px' : 0};
`