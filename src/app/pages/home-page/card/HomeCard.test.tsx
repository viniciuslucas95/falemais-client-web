import { GetPlanDto } from "../../../dto/plans/get-plans.dto";
import { GetTariffDto } from "../../../dto/tariffs/get-tariff.dto";
import { HomeCard } from "./HomeCard";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const plans: Omit<GetPlanDto, 'id'>[] = [
    { bonus: 30, name: 'FaleMais 30' }
]

const tariffs: Omit<GetTariffDto, 'id'>[] = [
    { originDdd: 11, destinyDdd: 16, pricePerMin: 1.9 }
]

describe('Home card component', () => {
    it('should type values and show results', async () => {
        const user = userEvent.setup()

        render(<HomeCard plans={plans} tariffs={tariffs} />)

        const inputs = screen.getAllByRole('textbox')
        const results = screen.getAllByText('-')

        await user.type(inputs[0], '11')
        await user.type(inputs[1], '16')
        await user.type(inputs[2], '20')

        expect(results[0].textContent).toBe('R$ 0,00')
        expect(results[1].textContent).toBe('R$ 38,00')
    })
})