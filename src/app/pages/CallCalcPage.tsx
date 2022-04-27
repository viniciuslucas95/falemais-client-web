import styled from 'styled-components'
import { FacebookIcon } from '../../assets/svgs/FacebookIcon'
import { InstagramIcon } from '../../assets/svgs/InstagramIcon'
import { LinkedInIcon } from '../../assets/svgs/LinkedInIcon.tsx'
import { TwitterIcon } from '../../assets/svgs/TwitterIcon'
import { BackgroundImage } from '../components/BackgroundImage'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Footer, FOOTER_SIZE } from '../components/Footer'
import { Header, HEADER_SIZE } from '../components/Header'
import { COLOR } from '../constants/color.constant'
import { useDimensions } from '../hooks/useDimensions'

export function CallCalcPage() {
    const { width } = useDimensions()

    return <Container>
        <Header buttons={
            <>
                <Button buttonColor={{
                    background: COLOR.neutral,
                    backgroundHover: COLOR.neutralHover,
                    backgroundActive: COLOR.neutralActive,
                    content: COLOR.primary,
                    outline: COLOR.primary
                }} onClick={() => console.log('Go to tariffs page...')} content={{ text: 'Tarifas' }} />
                <Button
                    style={{ marginLeft: '16px' }}
                    buttonColor={{
                        background: COLOR.neutral,
                        backgroundHover: COLOR.neutralHover,
                        backgroundActive: COLOR.neutralActive,
                        content: COLOR.primary,
                        outline: COLOR.primary
                    }} onClick={() => console.log('Go to plans page...')} content={{ text: 'Planos' }} />
            </>}>FaleMais App</Header>
        <Main>
            <Card />
            <BackgroundImage />
        </Main>
        <Footer buttons={<>
            <Button onClick={() => console.log('Go to LinkedIn link...')} hasShadow={false} hideInteractivity forceMinWidth content={{ icon: <LinkedInIcon /> }} />
            <Button onClick={() => console.log('Go to Instagram link...')} hasShadow={false} hideInteractivity forceMinWidth content={{ icon: <InstagramIcon /> }} />
            <Button onClick={() => console.log('Go to Facebook link...')} hasShadow={false} hideInteractivity forceMinWidth content={{ icon: <FacebookIcon /> }} />
            <Button onClick={() => console.log('Go to Twitter link...')} hasShadow={false} hideInteractivity forceMinWidth content={{ icon: <TwitterIcon /> }} />
        </>}>© 2022. FaleMais App. All rights reserved</Footer>
    </Container>
}

const Container = styled.div``

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 32px;
    min-height: calc(100vh - ${HEADER_SIZE} - ${FOOTER_SIZE});
`