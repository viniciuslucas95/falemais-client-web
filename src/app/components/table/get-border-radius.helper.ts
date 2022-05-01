export function getBorderRadius(columnIndex: number, rowIndex: number, columnLength: number, rowLength: number): React.CSSProperties | undefined {
    if (rowIndex === 0 && columnIndex === 0) return { borderRadius: '4rem 0 0 0' }
    if (rowIndex === 0 && columnIndex === columnLength - 1) return { borderRadius: '0 4rem 0 0' }
    if (rowIndex === rowLength - 1 && columnIndex === 0) return { borderRadius: '0 0 0 4rem' }
    if (rowIndex === rowLength - 1 && columnIndex === columnLength - 1) return { borderRadius: '0 0 4rem 0' }
    return undefined
}