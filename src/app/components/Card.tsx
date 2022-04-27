import styled from 'styled-components'
import { COLOR } from '../constants/color.constant'

export function Card() {
    return <Container>

    </Container>
}

const Container = styled.div`
    width: 400px;
    height: 400px;
    padding: 32px;
    background-color: ${COLOR.neutral};
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 20%);
`