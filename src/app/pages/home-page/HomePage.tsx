import styled from 'styled-components'
import { Card } from '../../components/Card'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/Header'
import { useDimensions } from '../../hooks/useDimensions'

export function HomePage() {
    const { width } = useDimensions()

    return <Container>
        <Header />
        <Main>
            <Card />
            {/* <BackgroundImage /> */}
        </Main>
        <Footer />
    </Container>
}

const Container = styled.div``

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 32px;
    min-height: 100vh;
`