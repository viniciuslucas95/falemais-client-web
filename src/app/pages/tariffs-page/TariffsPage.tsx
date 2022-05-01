import { PageContainer, PageProps } from "../PageContainer";
import styled from "styled-components";
import { useDimensions } from "../../hooks/useDimensions";
import { DeleteButton } from "../components/DeleteButton";
import { Column, Table } from "../../components/table/Table";
import { Card } from "../components/Card";

const SIZE_TO_REMOVE_CARD = 620
const SIZE_TO_MERGE_TABLE_COLUMNS = 430

export function TariffsPage({ tariffs }: Omit<PageProps, 'plans'>) {
    const { width } = useDimensions()

    function getColumns() {
        const columns: Column[] = width < SIZE_TO_MERGE_TABLE_COLUMNS ?
            [{ rows: [{ content: 'Origem -> Destino - Preço', alignContent: 'center', key: 'Origem -> Destino - Preço' }] }] :
            [
                { rows: [{ content: 'DDD de Origem', alignContent: 'center', key: 'DDD de Origem' }] },
                { rows: [{ content: 'DDD de Destino', alignContent: 'center', key: 'DDD de Destino' }] },
                { rows: [{ content: 'Preço por Minuto', alignContent: 'center', key: 'Preço por Minuto' }] }
            ]

        for (let i = 0; i < tariffs.length; i++) {
            const { originDdd, destinyDdd, pricePerMin, id } = tariffs[i]

            const priceString = 'R$ ' + parseFloat(pricePerMin.toString()).toFixed(2).replace('.', ',')
            const columnWidth = width <= SIZE_TO_REMOVE_CARD ? '100%' : 'auto'

            if (width < SIZE_TO_MERGE_TABLE_COLUMNS) {
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
            <StyledCard title='Gerenciar tarifas' firstSection={<></>} secondSection={<Table table={table} />} />
        </Main>
    </PageContainer>
}

const Main = styled.main`
    padding: 32px;

    @media screen and (max-width: ${SIZE_TO_REMOVE_CARD + 'px'}){
        padding: 0;
    }
`

const StyledCard = styled(Card)`
    margin: auto;

    @media screen and (max-width: ${SIZE_TO_REMOVE_CARD + 'px'}){
        width: 100%;
        box-shadow: none;
    }
`