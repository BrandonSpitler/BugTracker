import React from 'react'
import TableCell from './TableCell'


//array of filed names

const TableRow = (props) => {

    const onTableCellChange = (fieldName, value) => {
        const newCellValue = { ...props.rowData };
        newCellValue[fieldName] = value;
        props.onChange(props.dataIndex, { ...newCellValue });
    }

    let tableCells = props.columns.map(
        (column) => {
            return (
                <TableCell  {...props}
                    onChange={onTableCellChange}
                    key={props.rowData[column.field]}
                    value={props.rowData[column.field]}
                    Component={{ ...props.Component, TableCellType: column.tableCellType === undefined ? props.Component.TableCellType : column.tableCellType }}>
                </TableCell>
            )
        }
    )

    return (
        <props.Component.TableRowType>
            {tableCells}
        </props.Component.TableRowType>
    )
}

export default TableRow;