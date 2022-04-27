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
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 20%);
`

const ButtonsContainer = styled.div`
    display: flex;
`

const TitleText = styled(Headline6)`
    color: ${COLOR.neutral};
`