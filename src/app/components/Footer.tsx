import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants/color.constant'
import { useDimensions } from '../hooks/useDimensions'
import { Body1, Body2 } from './Texts'

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
        {buttons ?
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
    height: 56px;
    background-color: ${COLOR.primary};
    padding: 0 32px;
`

const ButtonsContainer = styled.div``

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