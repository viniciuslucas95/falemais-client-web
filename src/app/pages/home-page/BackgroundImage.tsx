import styled from 'styled-components'
import bgImage from '../../../assets/images/background.jpg'

export function BackgroundImage() {
    return <>
        <ImageContainer>
            <StyledImage src={bgImage} alt='background image' />
        </ImageContainer>
    </>
}

const ImageContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
`

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`