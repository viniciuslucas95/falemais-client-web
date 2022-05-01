import styled, { css } from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import logo from '../../../assets/images/logo.png'
import { useDimensions } from '../../hooks/useDimensions'
import { Link, useLocation } from "react-router-dom";
import { MenuButton } from './MenuButton';

const HEADER_SIZE = '48rem'
const SIZE_TO_SHOW_SIDE_NAV = 426

interface Props {
    isSideNavOpen?: boolean
    toggleSideNav: () => void
}

export function Header({ toggleSideNav, isSideNavOpen }: Props) {
    const { width } = useDimensions()
    const location = useLocation()
    const isSelected = (path: string) => path === location.pathname

    return <Container>
        {width <= SIZE_TO_SHOW_SIDE_NAV ? <MenuButton isToggled={isSideNavOpen} onClick={toggleSideNav} /> : null}
        <Logo src={logo} alt='telzir logo' />
        {
            width > SIZE_TO_SHOW_SIDE_NAV ?
                <Nav>
                    <StyledLink to='/'><NavItem isSelected={isSelected('/')}><NavText isSelected={isSelected('/')}>Início</NavText></NavItem></StyledLink>
                    <StyledLink to='/tariffs'><NavItem style={{ margin: '0 16rem' }} isSelected={isSelected('/tariffs')}><NavText isSelected={isSelected('/tariffs')}>Tarifas</NavText></NavItem></StyledLink>
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
    width: 100%;
    height: ${HEADER_SIZE};
    background-color: ${COLOR.neutral};
    padding: 0 32rem;
    border-width: 0 0 1rem 0;
    border-color: ${COLOR.disabledLighter};
    border-style: solid;

    @media screen and (max-width:${SIZE_TO_SHOW_SIDE_NAV + 1 + 'px'}){
        padding: 0;
        justify-content: flex-start;
    }
`

const Logo = styled.img`
    height: 36rem;
    image-rendering: optimizeQuality;

    @media screen and (max-width:${SIZE_TO_SHOW_SIDE_NAV + 1 + 'px'}){
        margin: 0 0 0 32px;
    }
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
    padding: 0 8rem;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;

    ${({ isSelected }) => isSelected ? css`
        ::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 1rem;
            border-radius: 1rem;
            background-color: ${COLOR.primary};
            bottom: 0;
            left: 0;
            margin-bottom: -1rem;
        }
    ` : null};    
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