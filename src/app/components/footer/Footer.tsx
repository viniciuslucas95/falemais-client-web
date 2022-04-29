import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { useDimensions } from '../../hooks/useDimensions'
import { Body1, Body2 } from '../Texts'
import { LinkedInIcon } from '../../../assets/svgs/LinkedInIcon.tsx'
import { InstagramIcon } from '../../../assets/svgs/InstagramIcon'
import { FacebookIcon } from '../../../assets/svgs/FacebookIcon'
import { TwitterIcon } from '../../../assets/svgs/TwitterIcon'
import { SocialMediaButton } from './SocialMediaButton'

const FOOTER_SIZE = '48px'

export function Footer() {
    const { width } = useDimensions()

    return <Container>
        {
            width > 700 ? <>
                <CentralizedTextContainer>
                    <NormalText>© 2022. FaleMais App. All rights reserved</NormalText>
                </CentralizedTextContainer>
                <Row>{socialMediaButtons}</Row>
            </>
                :
                <>
                    <Row style={{ padding: '16px 0 8px 0' }}> {socialMediaButtons}</Row>
                    <Row style={{ padding: '0 0 16px 0' }}><SmallText>© 2022. FaleMais App. All rights reserved</SmallText></Row>
                </>
        }
    </Container>
}

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 32px;
    height: fit-content;
    background-color: ${COLOR.neutral};
    border-width: 1px 0 0 0;
    border-color: ${COLOR.disabledLighter};
    border-style: solid;

    @media screen and (max-width: 700px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 16px;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
`

const CentralizedTextContainer = styled.div`
    position: absolute;
    right: 50%;
    transform: translateX(calc(50%));
`

const Row = styled.div`
    display: flex;
    align-items: center;
    height: ${FOOTER_SIZE};

    @media screen and (max-width: 700px){
        height: fit-content;
    }
`

const NormalText = styled(Body1)`
    color: ${COLOR.mediumEmphasis};
`

const SmallText = styled(Body2)`
    color: ${COLOR.mediumEmphasis};
`

const socialMediaButtons = <ButtonsContainer>
    <SocialMediaButton onClick={() => console.log('Go to LinkedIn link...')}><LinkedInIcon color={COLOR.primary} /></SocialMediaButton>
    <SocialMediaButton onClick={() => console.log('Go to Instagram link...')}><InstagramIcon color={COLOR.primary} /></SocialMediaButton>
    <SocialMediaButton onClick={() => console.log('Go to Facebook link...')}><FacebookIcon color={COLOR.primary} /></SocialMediaButton>
    <SocialMediaButton onClick={() => console.log('Go to Twitter link...')}><TwitterIcon color={COLOR.primary} /></SocialMediaButton>
</ButtonsContainer>