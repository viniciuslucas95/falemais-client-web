import styled from 'styled-components'
import { BackgroundImage } from '../components/BackgroundImage'
import { Card } from '../components/Card'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function CallCalcPage() {
    return <Container>
        <Header>FaleMais App</Header>
        <Main>
            <Card />
            <BackgroundImage />
        </Main>
        <Footer>© 2022. FaleMais App. All rights reserved</Footer>
    </Container>
}

const Container = styled.div`
    height: 100vh;
`

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: calc(100% - 112px);
`