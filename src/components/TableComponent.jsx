export const TableComponent = ({numColumns, numRows}) => {

    const generateCellData = (rowIndex, colIndex) => {
        return `Row ${rowIndex + 1} - Col ${colIndex + 1}`
    }

    const renderTableCells = () => {
        const rows = []
        for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
            const cells = []
            for (let colIndex = 0; colIndex < numColumns; colIndex++) {
                cells.push(
                    <td key={`cell ${rowIndex} ${colIndex}`}>
                        {generateCellData(rowIndex, colIndex)}
                    </td>
                )
            }

            rows.push(
                <tr key={`row ${rowIndex}`}>
                    {cells}
                </tr>
            )
        }
        return rows
    }

    return (
        <table>
            <thead>
                <tr>
                    {Array.from({length: numColumns}).map((_, index) => (
                        <th key={`header ${index}`}>Header {index + 1}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {renderTableCells()}
            </tbody>
        </table>
    )
}