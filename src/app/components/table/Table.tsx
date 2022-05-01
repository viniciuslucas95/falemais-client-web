import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { Body2, Subtitle2 } from '../Texts'
import { getBorderRadius } from './get-border-radius.helper'

type AlignContent = 'flex-start' | 'center' | 'flex-end'

interface AlignProp {
    alignContent?: AlignContent
}

interface WidthProp {
    width?: string
}

export interface Row extends WidthProp, AlignProp {
    content: string | JSX.Element,
    key: string
}

export interface Column extends WidthProp {
    rows: Row[]
}

interface Props {
    style?: React.CSSProperties
    className?: string
    table: Column[]
}

export function Table({ table, style, className }: Props) {
    return <Container style={style} className={className}>
        {table.map((column, columnIndex) => {
            const { width, rows } = column
            const columnLength = rows.length

            return <Column width={width} key={columnIndex}>
                {rows.map((row, rowIndex) => {
                    const { content, width, alignContent, key } = row
                    const style = getBorderRadius(columnIndex, rowIndex, table.length, columnLength)

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
    </Container>
}

const Container = styled.div`
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
    padding: 16rem;
    height: 48rem;
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
    padding: 16rem;
    height: 48rem;
`

const TitleText = styled(Subtitle2)`
    color: ${COLOR.neutral};
`