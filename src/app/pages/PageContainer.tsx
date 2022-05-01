import { PropsWithChildren, useEffect, useState } from "react"
import { Header } from "../components/header/Header"
import { Footer } from '../components/footer/Footer'
import { useDimensions } from "../hooks/useDimensions"
import { SideNav } from "../components/SideNav"

interface Props {
    children: JSX.Element | JSX.Element[]
}

export function PageContainer({ children }: PropsWithChildren<Props>) {
    const { width } = useDimensions()
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)

    useEffect(() => {
        setIsSideNavOpen(false)
    }, [width])

    return <div>
        <Header toggleSideNav={() => setIsSideNavOpen(!isSideNavOpen)} isSideNavOpen={isSideNavOpen} />
        {children}
        <Footer />
        <SideNav isSideNavOpen={isSideNavOpen} toggleSideNav={() => setIsSideNavOpen(!isSideNavOpen)} />
    </div>
}