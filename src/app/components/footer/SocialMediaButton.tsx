import styled from 'styled-components'
import { PropsWithChildren } from "react";
import { COLOR } from "../../constants/color.constant";
import { Button } from "../buttons/Button";

interface Props {
    children: JSX.Element
    onClick: () => void
}

export function SocialMediaButton({ children, onClick }: PropsWithChildren<Props>) {
    return <StyledButton
        onClick={onClick}
        content={{ icon: children }} />
}

const StyledButton = styled(Button)`
    background-color: ${COLOR.neutral};
    outline-color: ${COLOR.highEmphasis};
    width: 36px;
`