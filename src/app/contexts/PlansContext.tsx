import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { GetPlanDto } from "../dto/get-plans.dto";
import { PlansServiceFactory } from "../factories/plans-service.factory";

interface Context {
    plans: GetPlanDto[]
}

const PlansContext = createContext<Context>({ plans: [] })

interface Props {
    children: JSX.Element
}

const plansService = new PlansServiceFactory().create()

export function PlansProvider({ children }: PropsWithChildren<Props>) {
    const [plans, setPlans] = useState<GetPlanDto[]>([])

    useEffect(() => {
        (async () => {
            try {
                const results = await plansService.find()
                setPlans(results)
            } catch (err) {
                // handle error properly
                console.error(err)
            }
        })()
    }, [])

    return <PlansContext.Provider value={{ plans }}>
        {children}
    </PlansContext.Provider>
}

export const plansContext = PlansContext