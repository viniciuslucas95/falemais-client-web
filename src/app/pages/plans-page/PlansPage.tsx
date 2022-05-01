import { PageContainer } from "../PageContainer";
import styled from "styled-components";
import { useDimensions } from "../../hooks/useDimensions";
import { DeleteButton } from "../components/DeleteButton";
import { Column, Table } from "../../components/table/Table";
import { Card } from "../components/Card";
import { TextField } from "../../components/input-fields/TextField";
import { ActionType, plansReducer, plansInitialState } from "./plans-reducer";
import { useContext, useReducer } from "react";
import { Button } from "../../components/buttons/Button";
import { plansContext } from "../../contexts/PlansContext";
import { CreatePlanDto } from "../../dto/plans/create-plans.dto";
import bg from '../../../assets/images/plans-bg.png'
import { COLOR } from "../../constants/color.constant";

const SIZE_TO_REMOVE_CARD = 432
const SIZE_TO_MERGE_TABLE_COLUMNS = 390

export function PlansPage() {
    const { plans, createPlan, deletePlan } = useContext(plansContext)
    const [state, dispatch] = useReducer(plansReducer, plansInitialState)
    const { name, bonus } = state
    const { width } = useDimensions()
    const table: Column[] = [
        getDeleteButtonColumn(),
        ...getColumns()
    ]

    function getColumns() {
        const columns: Column[] = width < SIZE_TO_MERGE_TABLE_COLUMNS ?
            [{ rows: [{ content: 'Plano - Bônus', alignContent: 'center', key: 'Plano - Bônus' }] }] :
            [
                { rows: [{ content: 'Plano', alignContent: 'center', key: 'Plano' }] },
                { rows: [{ content: 'Bônus', alignContent: 'center', key: 'Bônus' }] }
            ]

        for (let i = 0; i < plans.length; i++) {
            const { bonus, name, id } = plans[i]

            const columnWidth = width <= SIZE_TO_REMOVE_CARD ? '100%' : 'auto'

            if (width < SIZE_TO_MERGE_TABLE_COLUMNS) {
                columns[0].rows.push({ content: `${name} - ${bonus.toString()}`, alignContent: 'center', key: id.toString() })
                columns[0].width = columnWidth
                continue
            }

            columns[0].rows.push({ content: name, alignContent: 'center', key: id.toString() })
            columns[0].width = columnWidth
            columns[1].rows.push({ content: bonus.toString(), alignContent: 'center', key: id.toString() })
            columns[1].width = columnWidth
        }

        return columns
    }

    function getDeleteButtonColumn() {
        const column: Column = { width: 'auto', rows: [{ content: 'Deletar?', width: 'auto', alignContent: 'center', key: 'Deletar?' }] }

        for (let i = 0; i < plans.length; i++) {
            const { id } = plans[i]

            column.rows.push({
                content: <DeleteButton onClick={() => deletePlan(id)} />,
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

    const onNameChange = (value: string) => { onDataChange(ActionType.SET_NAME, value) }
    const onBonusChange = (value: string) => { onDataChange(ActionType.SET_BONUS, value) }

    async function handlePlanCreation() {
        const hasNameError = name.helpText ? name.helpText.error ?? false : false
        const hasBonusError = bonus.helpText ? bonus.helpText.error ?? false : false

        if (hasNameError || hasBonusError) return

        const dto: CreatePlanDto = {
            name: name.value,
            bonus: parseInt(bonus.value)
        }

        await createPlan(dto)
    }

    return <PageContainer>
        <Main>
            <StyledCard
                title='Gerenciar planos'
                firstSection={
                    <FieldsContainer>
                        <StyledTextField style={{ marginRight: width > SIZE_TO_MERGE_TABLE_COLUMNS ? '32px' : 0 }} label='Nome' data={name} onChange={onNameChange} />
                        <StyledTextField label='Bônus (em minutos)' data={bonus} onChange={onBonusChange} />
                        <StyledButton onClick={handlePlanCreation} content={{ text: 'Adicionar' }} />
                    </FieldsContainer>
                }
                secondSection={<Table table={table} />} />
        </Main>
    </PageContainer>
}

const Main = styled.main`
    padding: 32px;
    display: flex;
    background-image: url(${bg});
    background-position: right center;
    background-repeat: no-repeat;
    background-color: ${COLOR.neutral};

    @media screen and (max-width: ${SIZE_TO_REMOVE_CARD + 'px'}){
        padding: 0;
    }
`

const StyledCard = styled(Card)`
    margin-left: 128px;

    @media screen and (max-width: 1440px){
        margin-left: 64px;
    }

    @media screen and (max-width: 1250px){
        margin-left: 32px;
    }

    @media screen and (max-width: 850px){
        margin: auto;
    }

    @media screen and (max-width: ${SIZE_TO_REMOVE_CARD + 'px'}){
        width: 100%;
        box-shadow: none;
    }
`

const FieldsContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;

    @media screen and (max-width: ${SIZE_TO_MERGE_TABLE_COLUMNS + 'px'}) {
        flex-direction: column;
    }
`

const StyledTextField = styled(TextField)`
    margin: 32rem 0 0 0;
    width: 100%;

    @media screen and (max-width: ${SIZE_TO_MERGE_TABLE_COLUMNS + 'px'}) {
        width: 100%;
    }
`

const StyledButton = styled(Button)`
    margin: 32rem 0 0 0;
    width: 100%;

    @media screen and (max-width: ${SIZE_TO_MERGE_TABLE_COLUMNS + 'px'}) {
        width: 100%;
    }
`