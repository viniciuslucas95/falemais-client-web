import { PageContainer } from "../PageContainer";
import styled from "styled-components";
import { useDimensions } from "../../hooks/useDimensions";
import { DeleteButton } from "../components/DeleteButton";
import { Column, Table } from "../../components/table/Table";
import { Card } from "../components/Card";
import { TextField } from "../../components/input-fields/TextField";
import { ActionType, tariffsInitialState, tariffsReducer } from "./tariffs-reducer";
import { useContext, useReducer } from "react";
import { Button } from "../../components/buttons/Button";
import { tariffsContext } from "../../contexts/TariffsContext";
import { CreateTariffDto } from "../../dto/tariffs/create-tariff.dto";

const SIZE_TO_REMOVE_CARD = 620
const SIZE_TO_MERGE_TABLE_COLUMNS = 430

export function TariffsPage() {
    const { tariffs, deleteTariff, createTariff } = useContext(tariffsContext)
    const [state, dispatch] = useReducer(tariffsReducer, tariffsInitialState)
    const { destinyDdd, originDdd, pricePerMin } = state
    const { width } = useDimensions()
    const table: Column[] = [
        getDeleteButtonColumn(),
        ...getColumns()
    ]

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
                content: <DeleteButton onClick={() => deleteTariff(id)} />,
                alignContent: 'center',
                key: id.toString()
            })
        }

        return column
    }

    function onDataChange(action: ActionType, value: string) {
        dispatch({
            type: action,
            payload: value
        })
    }

    const onOriginDddChange = (value: string) => { onDataChange(ActionType.SET_ORIGIN_DDD, value) }
    const onDestinyDddChange = (value: string) => { onDataChange(ActionType.SET_DESTINY_DDD, value) }
    const onPricePerMinChange = (value: string) => { onDataChange(ActionType.SET_PRICE_PER_MIN, value) }

    async function handleTariffCreation() {
        const hasOriginDddError = originDdd.helpText ? originDdd.helpText.error ?? false : false
        const hasDestinyDddError = originDdd.helpText ? originDdd.helpText.error ?? false : false
        const hasPricePerMinErro = pricePerMin.helpText ? pricePerMin.helpText.error ?? false : false

        if (hasOriginDddError || hasDestinyDddError || hasPricePerMinErro) return

        const dto: CreateTariffDto = {
            originDdd: parseInt(originDdd.value),
            destinyDdd: parseInt(destinyDdd.value),
            pricePerMin: parseFloat(pricePerMin.value.replace(',', '.'))
        }

        await createTariff(dto)
    }

    return <PageContainer>
        <Main>
            <StyledCard
                title='Gerenciar tarifas'
                firstSection={
                    <>
                        <FieldsContainer>
                            <StyledTextField style={{ marginRight: width > SIZE_TO_MERGE_TABLE_COLUMNS ? '32px' : 0 }} label='DDD de Origem' data={originDdd} onChange={onOriginDddChange} />
                            <StyledTextField label='DDD de Destino' data={destinyDdd} onChange={onDestinyDddChange} />
                        </FieldsContainer>
                        <FieldsContainer>
                            <StyledTextField style={{ marginRight: width > SIZE_TO_MERGE_TABLE_COLUMNS ? '32px' : 0 }} label='Preço por Minuto' data={pricePerMin} onChange={onPricePerMinChange} />
                            <StyledButton onClick={handleTariffCreation} content={{ text: 'Adicionar' }} />
                        </FieldsContainer>
                    </>
                }
                secondSection={<Table table={table} />} />
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

const FieldsContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 100%;

    @media screen and (max-width: ${SIZE_TO_MERGE_TABLE_COLUMNS + 'px'}) {
        flex-direction: column;
    }
`

const StyledTextField = styled(TextField)`
    margin: 32rem 0 0 0;
    width: calc(50% - 16px);

    @media screen and (max-width: ${SIZE_TO_MERGE_TABLE_COLUMNS + 'px'}) {
        width: 100%;
    }
`

const StyledButton = styled(Button)`
    margin: 32rem 0 0 0;
    width: calc(50% - 16px);

    @media screen and (max-width: ${SIZE_TO_MERGE_TABLE_COLUMNS + 'px'}) {
        width: 100%;
    }
`