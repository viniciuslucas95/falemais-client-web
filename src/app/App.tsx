import { PlansServiceFactory } from './factories/plans-service.factory'
import { TariffsServiceFactory } from './factories/tariffs-service.factory'
import { HomePage } from './pages/home-page/HomePage'

const tariffsService = new TariffsServiceFactory().create()
const plansService = new PlansServiceFactory().create()

export function App() {
  return <HomePage tariffsService={tariffsService} plansService={plansService} />
}