import styled from 'styled-components'
import { COLOR } from '../constants/color.constant'

interface Props {
    firstSection: JSX.Element
    secondSection: JSX.Element
    title: string
    style?: React.CSSProperties
    className?: string
}

export function Card({ firstSection, secondSection, style, className, title }: Props) {
    return <Container style={style} className={className}>
        <Title>{title}</Title>
        {firstSection}
        <Separator />
        {secondSection}
    </Container>
}

const Container = styled.div`
    padding: 32px;
    background-color: ${COLOR.neutral};
    width: fit-content;
    border-radius: 4px;
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 20%);

    @media screen and (max-width: 427px){
        width: 100%;
        padding: 32px;
        box-shadow: none;
    }
`

const Separator = styled.div`
    width: 100%;
    height: 1px;
    padding: 0 32px;
    background-color: ${COLOR.disabledLighter};
`

const Title = styled.h1`
    display: inline-block;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.15px;
    font-weight: 500;
    color:${COLOR.highEmphasis};
    margin: 0 0 32px 0;
`