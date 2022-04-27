import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants/color.constant'
import { Headline6 } from './Texts'

export const HEADER_SIZE = '48px'

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
    height: ${HEADER_SIZE};
    background-color: ${COLOR.primary};
    padding: 0 32px;
`

const ButtonsContainer = styled.div`
    display: flex;
`

const TitleText = styled(Headline6)`
    color: ${COLOR.neutral};
`