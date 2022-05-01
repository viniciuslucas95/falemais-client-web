import styled, { css } from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { Button } from '../buttons/Button'

interface ToggleProp {
    isToggled?: boolean
}

interface Props extends ToggleProp {
    onClick: () => void
}

export function MenuButton({ isToggled, onClick }: Props) {
    return <Container
        isToggled={isToggled}
        onClick={onClick}
        content={{
            icon: <MenuContainer>
                <TopBar isToggled={isToggled} />
                <MiddleBar isToggled={isToggled} />
                <BottomBar isToggled={isToggled} />
            </MenuContainer>
        }} />
}

const Container = styled(Button) <ToggleProp>`
    width: 49px;
    height: 49px;
    background-color: ${COLOR.primary};
    border-radius: 0;
    z-index: 1;

    ${({ isToggled }) => isToggled ? css`
        position: fixed;
        left: 0;
        top: 0;
    `: null}
`

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const TopBar = styled.div<ToggleProp>`
    height: 2px;
    width: 24px;
    border-radius: 2px;
    background-color: ${COLOR.neutral};
    transform: ${({ isToggled }) => isToggled ? 'translateY(300%) rotate(45deg)' : 'rotate(0)'};
    transition: all 0.1s;
`

const MiddleBar = styled.div<ToggleProp>`
    height: 2px;
    width: 24px;
    margin: 4px 0;
    border-radius: 2px;
    background-color: ${COLOR.neutral};
    opacity: ${({ isToggled }) => isToggled ? 0 : 1};
    transition: opacity 0.1s;
`

const BottomBar = styled.div<ToggleProp>`
    height: 2px;
    width: 24px;
    border-radius: 2px;
    background-color: ${COLOR.neutral};
    transform: ${({ isToggled }) => isToggled ? 'translateY(-300%) rotate(-45deg)' : 'rotate(0)'};
    transition: all 0.1s;
`