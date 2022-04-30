import styled from 'styled-components'
import { COLOR } from "../../constants/color.constant";
import { Button } from "../../components/buttons/Button";
import { DeleteIcon } from '../../../assets/svgs/DeleteIcon';

interface Props {
    onClick: () => void
}

export function DeleteButton({ onClick }: Props) {
    return <StyledButton
        onClick={onClick}
        content={{ icon: <DeleteIcon color={COLOR.neutral} /> }} />
}

const StyledButton = styled(Button)`
    background-color: ${COLOR.error};
    outline-color: ${COLOR.highEmphasis};
    width: 36rem;

    :hover{
        background-color: ${COLOR.errorHover};
    }

    :active{
        background-color: ${COLOR.errorActive};
    }
`