import styled from 'styled-components'
import { CallCalcPage } from './pages/CallCalcPage'

export function App() {
  return <Main>
    <CallCalcPage />
  </Main>
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`