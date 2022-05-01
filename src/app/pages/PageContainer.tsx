import { PropsWithChildren } from "react"
import { Header } from "../components/Header"
import { Footer } from '../components/footer/Footer'

interface Props {
    children: JSX.Element | JSX.Element[]
}

export function PageContainer({ children }: PropsWithChildren<Props>) {
    return <div>
        <Header />
        {children}
        <Footer />
    </div>
}