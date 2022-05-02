import { render, screen } from '@testing-library/react'
import { Column, Table } from './Table'

const table: Column[] = [
    { rows: [{ content: 'Nome', key: '1' }, { content: 'Carlos Daniel', key: '2' }, { content: 'Fábio Antônio', key: '3' }] },
    { rows: [{ content: 'Idade', key: '4' }, { content: '25', key: '5' }, { content: '51', key: '6' }] },
]

describe('Table component', () => {
    it('should have columns and rows rendered', () => {
        render(<Table table={table} />)

        const c0r0 = screen.getByText('Nome')
        const c0r1 = screen.getByText('Carlos Daniel')
        const c0r2 = screen.getByText('Fábio Antônio')
        const c1r0 = screen.getByText('Idade')
        const c1r1 = screen.getByText('25')
        const c1r2 = screen.getByText('51')

        expect(c0r0).toBeInTheDocument()
        expect(c0r1).toBeInTheDocument()
        expect(c0r2).toBeInTheDocument()
        expect(c1r0).toBeInTheDocument()
        expect(c1r1).toBeInTheDocument()
        expect(c1r2).toBeInTheDocument()
    })
})