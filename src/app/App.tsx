import { HomePage } from './pages/home-page/HomePage'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { TariffsPage } from './pages/tariffs-page/TariffsPage';
import { TariffsProvider } from './contexts/TariffsContext';
import { PlansProvider } from './contexts/PlansContext';
import { PlansPage } from './pages/plans-page/PlansPage';

export function App() {
  return <TariffsProvider>
    <PlansProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tariffs' element={<TariffsPage />} />
          <Route path='/plans' element={<PlansPage />} />
        </Routes>
      </BrowserRouter>
    </PlansProvider>
  </TariffsProvider>
}