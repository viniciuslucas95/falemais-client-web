import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { CreatePlanDto } from "../dto/plans/create-plans.dto";
import { GetPlanDto } from "../dto/plans/get-plans.dto";
import { PlansServiceFactory } from "../factories/plans-service.factory";

interface Context {
    plans: GetPlanDto[]
    deletePlan: (id: number) => Promise<void>,
    createPlan: (dto: CreatePlanDto) => Promise<void>
}

const PlansContext = createContext<Context>({} as Context)

interface Props {
    children: JSX.Element
}

const plansService = new PlansServiceFactory().create()

export function PlansProvider({ children }: PropsWithChildren<Props>) {
    const [plans, setPlans] = useState<GetPlanDto[]>([])

    useEffect(() => {
        (async () => {
            await getPlans()
        })()
    }, [])

    async function getPlans() {
        try {
            const results = await plansService.find()
            setPlans(results)
        } catch (err) {
            // handle error properly
            console.error(err)
        }
    }

    async function deletePlan(id: number) {
        try {
            await plansService.delete(id)

            setPlans(plans.filter(plan => plan.id !== id))
        } catch (err) {
            // handle error properly
            console.error(err)
        }
    }

    async function createPlan(dto: CreatePlanDto) {
        try {
            await plansService.create(dto)
            await getPlans()
        } catch (err) {
            // handle error properly
            console.error(err)
        }
    }

    return <PlansContext.Provider value={{ plans, deletePlan, createPlan }}>
        {children}
    </PlansContext.Provider>
}

export const plansContext = PlansContext