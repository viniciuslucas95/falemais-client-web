import { HomePage } from './pages/home-page/HomePage'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { TariffsPage } from './pages/tariffs-page/TariffsPage';
import { TariffsProvider } from './contexts/TariffsContext';
import { PlansProvider } from './contexts/PlansContext';

export function App() {
  return <TariffsProvider>
    <PlansProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tariffs' element={<TariffsPage />} />
        </Routes>
      </BrowserRouter>
    </PlansProvider>
  </TariffsProvider>
}