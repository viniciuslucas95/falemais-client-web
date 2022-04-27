import styled from 'styled-components'
import bgImage from '../../assets/images/bg.webp'

export function BackgroundImage() {
    return <>
        <ImageContainer>
            <StyledImage src={bgImage} alt='background image' />
        </ImageContainer>
        <DarkLayer />
    </>
}

const ImageContainer = styled.div`
    width: 100%;
    height: 100vh;
`

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-position: center -84px;
    object-fit: cover;
`

const DarkLayer = styled.div`
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.1);
`