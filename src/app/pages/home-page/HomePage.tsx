import styled from 'styled-components'
import { HomeCard } from './card/HomeCard'
import { COLOR } from '../../constants/color.constant'
import bgImage1920 from '../../../assets/images/home-bg-1920.png'
import bgImage1440 from '../../../assets/images/home-bg-1440.png'
import { PageContainer } from '../PageContainer'
import { useContext } from 'react'
import { tariffsContext } from '../../contexts/TariffsContext'
import { plansContext } from '../../contexts/PlansContext'

export function HomePage() {
    const { tariffs } = useContext(tariffsContext)
    const { plans } = useContext(plansContext)

    return <PageContainer>
        <Main>
            <TextsContainer>
                <Title>Conheça os planos FaleMais</Title>
                <Subtitle style={{ margin: '12rem 0 0 0' }}>Com o novo produto FaleMais da Telzir, você pode falar de graça até um determinado tempo e só paga os minutos excedentes.</Subtitle>
            </TextsContainer>
            <StyledCard tariffs={tariffs} plans={plans} />
        </Main>
    </PageContainer>
}

const Main = styled.main`
    padding: 32rem 160rem;
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
        padding: 32rem 96rem;
        background-position: 75% center;
    }

    @media screen and (max-width: 1160px){
        background-image: url(${bgImage1440});
        padding: 32rem 96rem;
        background-position: 67.5% center;
    }

    @media screen and (max-width: 1024px){
        background-image: url(${bgImage1440});
        padding: 32rem 64rem;
        background-position: center center;
    }

    @media screen and (max-width: 850px){
        background-image: url(${bgImage1440});
        padding: 32rem 64rem;
        background-position: 40% center;
    }

    @media screen and (max-width: 700px){
        background-image: none;
        padding: 32rem 0;
    }
`

const TextsContainer = styled.div`
    width: 400rem;

    @media screen and (max-width: 700px){
        width: 100%;
        padding: 32rem;
        background-image: none;
        margin: auto;
    }
`

const StyledCard = styled(HomeCard)`
    margin: 32rem 0 0 0;

    @media screen and (max-width: 1220px) and (min-width: 1025px){
        margin: 32rem 0 0 0;
    }

    @media screen and (max-width: 1024px) and (min-width: 701px){
        margin: 32rem 0 0 0;
    }

    @media screen and (max-width: 700px) and (min-width: 427px){
        margin: 32rem auto;
    }

    @media screen and (max-width: 427px){
        margin: auto;
    }
`

const Title = styled.h1`
    display: inline-block;
    font-size: 48rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${COLOR.highEmphasis};

    @media screen and (max-width: 700px){
        display: inline-block;
        font-size: 34rem;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 0.25rem;
        font-weight: 400;
    }
`

const Subtitle = styled.p`
    display: inline-block;
    font-size: 16rem;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.15rem;
    font-weight: 400;
    color: ${COLOR.mediumEmphasis};

    @media screen and (max-width: 700px){
        display: inline-block;
        font-size: 14rem;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 0.1rem;
        font-weight: 500;
    }
`