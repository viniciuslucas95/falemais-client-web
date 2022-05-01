import { Link, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { COLOR } from '../constants/color.constant'

interface OpenProp {
    isSideNavOpen?: boolean
}

interface Props extends OpenProp {
    toggleSideNav: () => void
}

export function SideNav({ isSideNavOpen, toggleSideNav }: Props) {
    const location = useLocation()
    const isSelected = (path: string) => path === location.pathname

    return <>
        <Backdrop isSideNavOpen={isSideNavOpen} onClick={() => toggleSideNav()} />
        <Container isSideNavOpen={isSideNavOpen}>
            <Nav>
                <StyledLink to='/'><NavItem isSelected={isSelected('/')}><NavText isSelected={isSelected('/')}>Início</NavText></NavItem></StyledLink>
                <StyledLink to='/tariffs'><NavItem isSelected={isSelected('/tariffs')}><NavText isSelected={isSelected('/tariffs')}>Tarifas</NavText></NavItem></StyledLink>
                <StyledLink to='/plans'><NavItem isSelected={isSelected('/plans')}><NavText isSelected={isSelected('/plans')}>Planos</NavText></NavItem></StyledLink>
            </Nav >
        </Container>
    </>
}

interface SelectProp {
    isSelected?: boolean
}

const Container = styled.aside<OpenProp>`
    position: fixed;
    left: ${({ isSideNavOpen }) => isSideNavOpen ? '0px' : '-320px'};
    top: 0;
    width: 320px;
    height: 100vh;
    max-width: 100%;
    background-color: ${COLOR.primary};
    transition: left 0.1s;
`

const Backdrop = styled.div<OpenProp>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: ${({ isSideNavOpen }) => isSideNavOpen ? 0.25 : 0};
    transition: opacity 0.1s;
    pointer-events: ${({ isSideNavOpen }) => isSideNavOpen ? 'visible' : 'none'};
`

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 48px;

`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const NavItem = styled.div<SelectProp>`
    height: 48px;
    width: 100%;
    display: flex;
    padding: 0 32px;
    align-items: center;
    cursor: pointer;
    background-color: ${({ isSelected }) => isSelected ? COLOR.neutral : COLOR.primary};  
`

const NavText = styled.span<SelectProp>`
    display: inline-block;
    font-size: 14rem;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1.25rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ isSelected }) => isSelected ? COLOR.primary : COLOR.disabled};
`