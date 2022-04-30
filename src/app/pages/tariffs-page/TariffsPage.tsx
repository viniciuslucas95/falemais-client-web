import { PageContainer, PageProps } from "../PageContainer";
import styled from "styled-components";
import { CardWithTable, Column, Row } from "../CardWithTable";
import { useDimensions } from "../../hooks/useDimensions";
import { DeleteButton } from "../components/DeleteButton";

export function TariffsPage({ tariffs }: Omit<PageProps, 'plans'>) {
    const { width } = useDimensions()

    function getColumns() {
        const columns: Column[] = width < 620 ?
            [{ rows: [{ content: 'Origem -> Destino - Preço', alignContent: 'center', key: 'Origem -> Destino - Preço' }] }] :
            [
                { rows: [{ content: 'DDD de Origem', alignContent: 'center', key: 'DDD de Origem' }] },
                { rows: [{ content: 'DDD de Destino', alignContent: 'center', key: 'DDD de Destino' }] },
                { rows: [{ content: 'Preço por Minuto', alignContent: 'center', key: 'Preço por Minuto' }] }
            ]

        for (let i = 0; i < tariffs.length; i++) {
            const { originDdd, destinyDdd, pricePerMin, id } = tariffs[i]

            const priceString = 'R$ ' + parseFloat(pricePerMin.toString()).toFixed(2).replace('.', ',')
            const columnWidth = width < 427 ? '100%' : 'auto'

            if (width < 620) {
                columns[0].rows.push({ content: `${originDdd.toString()} -> ${destinyDdd.toString()} - ${priceString}`, alignContent: 'center', key: id.toString() })
                columns[0].width = columnWidth
                continue
            }

            columns[0].rows.push({ content: originDdd.toString(), alignContent: 'center', key: id.toString() })
            columns[0].width = columnWidth
            columns[1].rows.push({ content: destinyDdd.toString(), alignContent: 'center', key: id.toString() })
            columns[1].width = columnWidth
            columns[2].rows.push({ content: priceString, alignContent: 'center', key: id.toString() })
            columns[2].width = columnWidth
        }

        return columns
    }

    function getDeleteButtonColumn() {
        const column: Column = { width: 'auto', rows: [{ content: 'Deletar?', width: 'auto', alignContent: 'center', key: 'Deletar?' }] }

        for (let i = 0; i < tariffs.length; i++) {
            const { id } = tariffs[i]

            column.rows.push({
                content: <DeleteButton onClick={() => console.log('Delete id: ' + id)} />,
                alignContent: 'center',
                key: id.toString()
            })
        }

        return column
    }

    const table: Column[] = [
        getDeleteButtonColumn(),
        ...getColumns()
    ]

    return <PageContainer>
        <Main>
            <StyledCard title='Gerenciar tarifas' table={table}>
                <h1>test</h1>
            </StyledCard>
        </Main>
    </PageContainer>
}

const Main = styled.main`
    padding: 32rem;

    @media screen and (max-width: 427px){
        padding: 0;
    }
`

const StyledCard = styled(CardWithTable)`
    margin: auto;
`