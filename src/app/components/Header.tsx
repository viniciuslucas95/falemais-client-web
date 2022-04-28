import styled, { css } from 'styled-components'
import { COLOR } from '../constants/color.constant'
import logo from '../../assets/images/logo.png'

const HEADER_SIZE = '48px'

export function Header() {
    const pathname = window.location.pathname

    // Update do react router
    return <Container>
        <Logo src={logo} alt='telzir logo' />
        <Nav>
            <NavItem isSelected={pathname === '/' ? true : false}><NavText isSelected={pathname === '/' ? true : false}>Início</NavText></NavItem>
            <NavItem style={{ margin: '0 16px' }} isSelected={pathname === '/tariffs' ? true : false}><NavText isSelected={pathname === '/tariffs' ? true : false}>Tarifas</NavText></NavItem>
            <NavItem isSelected={pathname === '/plans' ? true : false}><NavText isSelected={pathname === '/plans' ? true : false}>Planos</NavText></NavItem>
        </Nav>
    </Container>
}

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${HEADER_SIZE};
    background-color: ${COLOR.neutral};
    padding: 0 32px;
    border-width: 0 0 1px 0;
    border-color: ${COLOR.textFieldContainer};
    border-style: solid;
`

const Logo = styled.img`
    height: 36px;
    image-rendering: optimizeQuality;
`

const Nav = styled.nav`
    display: flex;
    height: 100%;
`

interface SelectProp {
    isSelected: boolean
}

const NavItem = styled.div<SelectProp>`
    height: 100%;
    padding: 0 8px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;

    ${({ isSelected }) => isSelected ? css`
        ::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            border-radius: 1px;
            background-color: ${COLOR.primary};
            bottom: 0;
            left: 0;
        }
    ` : null};    
`

const NavText = styled.span<SelectProp>`
    display: inline-block;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1.25px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ isSelected }) => isSelected ? COLOR.primary : COLOR.disabled};
`