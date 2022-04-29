import { PropsWithChildren } from "react"
import { Header } from "../components/Header"
import { GetPlanDto } from "../dto/get-plans.dto"
import { GetTariffDto } from "../dto/get-tariff.dto"
import { Footer } from '../components/footer/Footer'

export interface PageProps {
    plans: GetPlanDto[]
    tariffs: GetTariffDto[]
}

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