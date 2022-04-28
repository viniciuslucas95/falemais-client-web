import styled from 'styled-components'
import { Card } from './Card'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/Header'
import { Headline3, Headline4, Headline5, Headline6, Subtitle1, Subtitle2 } from '../../components/Texts'
import { COLOR } from '../../constants/color.constant'
import bgImage1920 from '../../../assets/images/background-1920.png'
import bgImage1440 from '../../../assets/images/background-1440.png'
import { useDimensions } from '../../hooks/useDimensions'

export function HomePage() {
    const { width } = useDimensions()

    return <Container>
        <Header />
        <Main>
            <TextsContainer>
                {
                    width < 700 ?
                        <>
                            <Headline4 style={{ color: COLOR.highEmphasis }}>Conheça os planos FaleMais</Headline4>
                            <Subtitle2 style={{ color: COLOR.mediumEmphasis, margin: '12px 0 0 0' }}>Com o novo produto FaleMais da Telzir, você pode falar de graça até um determinado tempo e só paga os minutos excedentes.</Subtitle2>
                        </>
                        :
                        <>
                            <Headline3 style={{ color: COLOR.highEmphasis }}>Conheça os planos FaleMais</Headline3>
                            <Subtitle1 style={{ color: COLOR.mediumEmphasis, margin: '16px 0 0 0' }}>Com o novo produto FaleMais da Telzir, você pode falar de graça até um determinado tempo e só paga os minutos excedentes.</Subtitle1>
                        </>
                }

            </TextsContainer>
            <Card style={{ margin: width <= 1220 && width > 1024 ? '48px 0 0 0' : width <= 1024 && width > 700 ? '32px 0 0 0' : width < 700 && width > 424 ? '32px auto' : width <= 424 ? '32px 0 0 0' : '64px 0 0 0' }} />
        </Main>
        <Footer />
    </Container>
}

const Container = styled.div``

const Main = styled.main`
    padding: 64px 160px;
    background-image: url(${bgImage1920});
    background-position: right center;
    background-repeat: no-repeat;
    background-color: ${COLOR.neutral};

    @media screen and (max-width: 1440px){
        background-image: url(${bgImage1440});
        background-position: 75% center;
    }

    @media screen and (max-width: 1220px){
        background-image: url(${bgImage1440});
        padding: 48px 96px;
        background-position: 75% center;
    }

    @media screen and (max-width: 1160px){
        background-image: url(${bgImage1440});
        padding: 48px 96px;
        background-position: 67.5% center;
    }

    @media screen and (max-width: 1024px){
        background-image: url(${bgImage1440});
        padding: 32px 64px;
        background-position: center center;
    }

    @media screen and (max-width: 850px){
        background-image: url(${bgImage1440});
        padding: 32px 64px;
        background-position: 40% center;
    }

    @media screen and (max-width: 700px){
        background-image: none;
        padding: 32px 0;
    }
`
const TextsContainer = styled.div`
    width: 400px;

    @media screen and (max-width: 700px){
        width: 100%;
        padding: 32px;
        background-image: none;
        margin: auto;
    }
`