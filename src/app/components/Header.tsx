import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants/color.constant'
import { Headline5 } from './Texts'

interface Props {
    children: string
    buttons?: JSX.Element | JSX.Element[]
}

export function Header({ children, buttons }: PropsWithChildren<Props>) {
    return <Container>
        <TitleText>{children}</TitleText>
        {buttons ?
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            : null}
    </Container>
}

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    background-color: ${COLOR.primary};
    padding: 0 32px;
`

const ButtonsContainer = styled.div``

const TitleText = styled(Headline5)`
    color: ${COLOR.neutral};
`