import { PropsWithChildren } from "react";
import { COLOR } from "../../constants/color.constant";
import { Button } from "../Button";

interface Props {
    children: JSX.Element
    onClick: () => void
}

export function SocialMediaButton({ children, onClick }: PropsWithChildren<Props>) {
    return <Button
        buttonColor={{
            background: COLOR.neutral,
            backgroundHover: COLOR.neutral,
            backgroundActive: COLOR.neutral,
            outline: COLOR.highEmphasis,
            content: COLOR.primary
        }}
        onClick={onClick}
        hasShadow={false}
        hideInteractivity
        forceMinWidth
        content={{ icon: children }} />
}