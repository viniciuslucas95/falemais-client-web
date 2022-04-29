import styled from 'styled-components'
import { Card } from './card/Card'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/Header'
import { COLOR } from '../../constants/color.constant'
import bgImage1920 from '../../../assets/images/background-1920.png'
import bgImage1440 from '../../../assets/images/background-1440.png'
import { useDimensions } from '../../hooks/useDimensions'
import { useEffect, useState } from 'react'
import { TariffsService } from '../../services/tariffs/tariffs.service'
import { PlansService } from '../../services/plans/plans.service'
import { GetPlanDto } from '../../dto/get-plans.dto'
import { GetTariffDto } from '../../dto/get-tariff.dto'

interface Props {
    tariffsService: TariffsService,
    plansService: PlansService
}

export function HomePage({ tariffsService, plansService }: Props) {
    const { width } = useDimensions()
    const [plans, setPlans] = useState<GetPlanDto[]>([])
    const [tariffs, setTariffs] = useState<GetTariffDto[]>([])

    useEffect(() => {
        (async () => {
            try {
                const [tariffsResult, plansResult] = await Promise.all<[any, any]>([tariffsService.find(), plansService.find()])
                setPlans(plansResult.data)
                setTariffs(tariffsResult.data)
            } catch (err) {
                // handle error properly
                console.error(err)
            }
        })()
    }, [])

    return <Container>
        <Header />
        <Main>
            <TextsContainer>
                <Title>Conheça os planos FaleMais</Title>
                <Subtitle style={{ margin: '12px 0 0 0' }}>Com o novo produto FaleMais da Telzir, você pode falar de graça até um determinado tempo e só paga os minutos excedentes.</Subtitle>
            </TextsContainer>
            <StyledCard tariffs={tariffs} plans={plans} />
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

const StyledCard = styled(Card)`
    margin: 64px 0 0 0;

    @media screen and (max-width: 1220px) and (min-width: 1025px){
        margin: 48px 0 0 0;
    }

    @media screen and (max-width: 1024px) and (min-width: 701px){
        margin: 32px 0 0 0;
    }

    @media screen and (max-width: 700px){
        margin: 32px auto;
    }
`

const Title = styled.h1`
    display: inline-block;
    font-size: 48px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${COLOR.highEmphasis};

    @media screen and (max-width: 700px){
        display: inline-block;
        font-size: 34px;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 0.25px;
        font-weight: 400;
    }
`

const Subtitle = styled.p`
    display: inline-block;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.15px;
    font-weight: 400;
    color: ${COLOR.mediumEmphasis};

    @media screen and (max-width: 700px){
        display: inline-block;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 0.1px;
        font-weight: 500;
    }
`