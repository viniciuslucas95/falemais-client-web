import styled, { css } from 'styled-components'
import { COLOR } from '../constants/color.constant'
import logo from '../../assets/images/logo.png'
import { useDimensions } from '../hooks/useDimensions'
import { Link, useLocation } from "react-router-dom";

const HEADER_SIZE = '48px'

export function Header() {
    const { width } = useDimensions()
    const location = useLocation()

    const isSelected = (path: string) => path === location.pathname

    return <Container>
        <Logo src={logo} alt='telzir logo' />
        {
            width > 426 ?
                <Nav>
                    <StyledLink to='/'><NavItem isSelected={isSelected('/')}><NavText isSelected={isSelected('/')}>Início</NavText></NavItem></StyledLink>
                    <StyledLink to='/tariffs'><NavItem style={{ margin: '0 16px' }} isSelected={isSelected('/tariffs')}><NavText isSelected={isSelected('/tariffs')}>Tarifas</NavText></NavItem></StyledLink>
                    <StyledLink to='/plans'><NavItem isSelected={isSelected('/plans')}><NavText isSelected={isSelected('/plans')}>Planos</NavText></NavItem></StyledLink>
                </Nav >
                : null
        }
    </Container >
}

interface SelectProp {
    isSelected: boolean
}

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${HEADER_SIZE};
    background-color: ${COLOR.neutral};
    padding: 0 32px;
    border-width: 0 0 1px 0;
    border-color: ${COLOR.disabledLighter};
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

const StyledLink = styled(Link)`
    text-decoration: none;
`

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
            margin-bottom: -1px;
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