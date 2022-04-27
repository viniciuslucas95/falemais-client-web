import styled from 'styled-components'
import { BackgroundImage } from '../components/BackgroundImage'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function CallCalcPage() {
    return <Container>
        <Header>FaleMais App</Header>
        <Footer>© 2022. FaleMais App. All rights reserved</Footer>
        <BackgroundImage />
    </Container>
}

const Container = styled.div`
    
`