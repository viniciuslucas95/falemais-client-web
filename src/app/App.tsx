import { PlansServiceFactory } from './factories/plans-service.factory'
import { TariffsServiceFactory } from './factories/tariffs-service.factory'
import { HomePage } from './pages/home-page/HomePage'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from 'react';
import { GetTariffDto } from './dto/get-tariff.dto';
import { GetPlanDto } from './dto/get-plans.dto';
import { TariffsPage } from './pages/tariffs-page/TariffsPage';

const tariffsService = new TariffsServiceFactory().create()
const plansService = new PlansServiceFactory().create()

export function App() {
  const [plans, setPlans] = useState<GetPlanDto[]>([])
  const [tariffs, setTariffs] = useState<GetTariffDto[]>([])

  useEffect(() => {
    (async () => {
      try {
        const [tariffsResult, plansResult] = await Promise.all<[any, any]>([tariffsService.find(), plansService.find()])
        setPlans(plansResult.data)
        setTariffs(tariffsResult.data)
      } catch (err) {
        // handle error properly
        console.error(err)
      }
    })()
  }, [])

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage plans={plans} tariffs={tariffs} />} />
      <Route path='/tariffs' element={<TariffsPage tariffs={tariffs} />} />
    </Routes>
  </BrowserRouter>
}