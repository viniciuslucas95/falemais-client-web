import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'

interface Props {
    title: string
    firstSection: JSX.Element
    secondSection: JSX.Element
    style?: React.CSSProperties
    className?: string
}

export function Card({ title, firstSection, secondSection, style, className }: Props) {
    return <Container style={style} className={className}>
        <Title>{title}</Title>
        {firstSection}
        <Separator />
        {secondSection}
    </Container>
}

const Container = styled.div`
    padding: 32rem;
    background-color: ${COLOR.neutral};
    border-radius: 4rem;
    box-shadow: 0 4rem 5rem 0 rgb(0 0 0 / 14%), 0 1rem 10rem 0 rgb(0 0 0 / 12%), 0 2rem 4rem -1rem rgb(0 0 0 / 20%);
    width: fit-content;

    @media screen and (max-width: 427px){
        width: 100%;
        box-shadow: none;
    }
`

const Title = styled.h1`
    display: inline-block;
    font-size: 20rem;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.15rem;
    font-weight: 500;
    color:${COLOR.highEmphasis};
`

const Separator = styled.div`
    width: 100%;
    height: 1rem;
    padding: 0 32rem;
    background-color: ${COLOR.disabledLighter};
    margin: 32rem 0;
`