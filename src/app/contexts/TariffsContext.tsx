import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { GetTariffDto } from "../dto/get-tariff.dto";
import { TariffsServiceFactory } from "../factories/tariffs-service.factory";

interface Context {
    tariffs: GetTariffDto[]
}

const TariffsContext = createContext<Context>({ tariffs: [] })

interface Props {
    children: JSX.Element
}

const tariffsService = new TariffsServiceFactory().create()

export function TariffsProvider({ children }: PropsWithChildren<Props>) {
    const [tariffs, setTariffs] = useState<GetTariffDto[]>([])

    useEffect(() => {
        (async () => {
            try {
                const results = await tariffsService.find()
                setTariffs(results)
            } catch (err) {
                // handle error properly
                console.error(err)
            }
        })()
    }, [])

    async function deleteTariff(id: number) {
        try {

        } catch (err) {
            // handle error properly
            console.error(err)
        }
    }

    return <TariffsContext.Provider value={{ tariffs }}>
        {children}
    </TariffsContext.Provider>
}

export const tariffsContext = TariffsContext