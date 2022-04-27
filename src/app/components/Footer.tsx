import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants/color.constant'
import { useDimensions } from '../hooks/useDimensions'
import { Body1, Body2 } from './Texts'

export const FOOTER_SIZE = '48px'

interface Props {
    children: string
    buttons?: JSX.Element | JSX.Element[]
}

export function Footer({ children, buttons }: PropsWithChildren<Props>) {
    const { width } = useDimensions()

    return <Container>
        <TextContainer>
            {
                width < 425 ?
                    <SmallText>{children}</SmallText>
                    : <NormalText>{children}</NormalText>
            }

        </TextContainer>
        {buttons && width > 767 ?
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            : null}
    </Container>
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 32px;
    height: ${FOOTER_SIZE};
    background-color: ${COLOR.primary};
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 20%);
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
`

const TextContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
`

const NormalText = styled(Body1)`
    color: ${COLOR.neutral};
`

const SmallText = styled(Body2)`
    color: ${COLOR.neutral};
`