import { PropsWithChildren } from "react"

interface Props {
    children: JSX.Element | JSX.Element[]
    style?: React.CSSProperties
}

export function Svg({ children, style }: PropsWithChildren<Props>) {
    return <svg style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        {children}
    </svg>
}