import React from 'react'
import TableCell from './TableCell'


//array of filed names

const TableRow = (props) => {
    let tableCells = props.columns.map(
        (column) => {
            return (
                <TableCell key={props.rowData[column.field]} value={props.rowData[column.field]} {...props}>

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