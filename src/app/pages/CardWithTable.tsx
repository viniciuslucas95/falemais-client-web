import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { Body2, Subtitle2 } from '../components/Texts'
import { COLOR } from '../constants/color.constant'

type AlignContent = 'flex-start' | 'center' | 'flex-end'

export interface Row {
    content: string | JSX.Element,
    key: string,
    width?: string,
    alignContent?: AlignContent
}

export interface Column {
    rows: Row[]
    width?: string
}

interface Props {
    children: JSX.Element
    title: string
    style?: React.CSSProperties
    className?: string
    table: Column[]
}

export function CardWithTable({ children, table, style, className, title }: PropsWithChildren<Props>) {
    function getStyle(columnIndex: number, rowIndex: number, columnLength: number, rowLength: number): React.CSSProperties | undefined {
        if (rowIndex === 0 && columnIndex === 0) return { borderRadius: '4px 0 0 0' }
        if (rowIndex === 0 && columnIndex === columnLength - 1) return { borderRadius: '0 4px 0 0' }
        if (rowIndex === rowLength - 1 && columnIndex === 0) return { borderRadius: '0 0 0 4px' }
        if (rowIndex === rowLength - 1 && columnIndex === columnLength - 1) return { borderRadius: '0 0 4px 0' }
        return undefined
    }

    function formatTable() {
        return <Table>
            {table.map((column, columnIndex) => {
                const { width, rows } = column
                const columnLength = rows.length

                return <Column width={width} key={columnIndex}>
                    {rows.map((row, rowIndex) => {
                        const { content, width, alignContent, key } = row
                        const style = getStyle(columnIndex, rowIndex, table.length, columnLength)
                        const index = `${columnIndex}-${rowIndex}`

                        return rowIndex === 0 ?
                            <TitleContent width={width} key={key} style={style} alignContent={alignContent}>
                                {typeof content === 'string' ?
                                    <TitleText>{content}</TitleText> :
                                    content}
                            </TitleContent> :
                            <RowContent width={width} key={key} style={style} alignContent={alignContent}>
                                {typeof content === 'string' ?
                                    <RowText>{content}</RowText> :
                                    content}
                            </RowContent>
                    })}
                </Column>
            })}
        </Table>
    }

    return <Container style={style} className={className}>
        <Title>{title}</Title>
        {children}
        <Separator />
        {formatTable()}
    </Container>
}

interface AlignProp {
    alignContent?: AlignContent
}

interface WidthProp {
    width?: string
}

const Container = styled.div`
    padding: 32px;
    background-color: ${COLOR.neutral};
    width: fit-content;
    border-radius: 4px;
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 20%);

    @media screen and (max-width: 427px){
        width: 100%;
        padding: 32px;
        box-shadow: none;
    }
`

const Separator = styled.div`
    width: 100%;
    height: 1px;
    padding: 0 32px;
    background-color: ${COLOR.disabledLighter};
    margin: 32px 0;
`

const Title = styled.h1`
    display: inline-block;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.15px;
    font-weight: 500;
    color:${COLOR.highEmphasis};
`

const Table = styled.div`
    display: flex;
`

const Column = styled.div<WidthProp>`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width ?? '100%'};
`

const RowContent = styled.div<AlignProp & WidthProp>`
    display: flex;
    width: ${({ width }) => width ?? '100%'};
    justify-content: ${({ alignContent }) => alignContent ?? 'flex-start'};
    align-items: center;
    background-color: ${COLOR.disabledLighter};
    padding: 16px;
    height: 48px;
`

const RowText = styled(Body2)`
    color: ${COLOR.mediumEmphasis};
`

const TitleContent = styled.div<AlignProp & WidthProp>`
    display: flex;
    width: ${({ width }) => width ?? '100%'};
    justify-content: ${({ alignContent }) => alignContent ?? 'flex-start'};
    align-items: center;
    background-color: ${COLOR.primary};
    padding: 16px;
    height: 48px;
`

const TitleText = styled(Subtitle2)`
    color: ${COLOR.neutral};
`