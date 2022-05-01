import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { CreateTariffDto } from "../dto/tariffs/create-tariff.dto";
import { GetTariffDto } from "../dto/tariffs/get-tariff.dto";
import { TariffsServiceFactory } from "../factories/tariffs-service.factory";

interface Context {
    tariffs: GetTariffDto[]
    deleteTariff: (id: number) => Promise<void>,
    createTariff: (dto: CreateTariffDto) => Promise<void>
}

const TariffsContext = createContext<Context>({} as Context)

interface Props {
    children: JSX.Element
}

const tariffsService = new TariffsServiceFactory().create()

export function TariffsProvider({ children }: PropsWithChildren<Props>) {
    const [tariffs, setTariffs] = useState<GetTariffDto[]>([])

    useEffect(() => {
        (async () => {
            await getTariffs()
        })()
    }, [])

    async function getTariffs() {
        try {
            const results = await tariffsService.find()
            setTariffs(results)
        } catch (err) {
            // handle error properly
            console.error(err)
        }
    }

    async function deleteTariff(id: number) {
        try {
            await tariffsService.delete(id)

            setTariffs(tariffs.filter(tariff => tariff.id !== id))
        } catch (err) {
            // handle error properly
            console.error(err)
        }
    }

    async function createTariff(dto: CreateTariffDto) {
        try {
            await tariffsService.create(dto)
            await getTariffs()
        } catch (err) {
            // handle error properly
            console.error(err)
        }
    }

    return <TariffsContext.Provider value={{ tariffs, deleteTariff, createTariff }}>
        {children}
    </TariffsContext.Provider>
}

export const tariffsContext = TariffsContext