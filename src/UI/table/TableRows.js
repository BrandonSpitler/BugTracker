import React from 'react'
import TableRow from './TableRow'

const TableRows = (props) => {


    let rows = props.tableData.map(
        (value, index) => {
            return (
                <TableRow onChange={props.onTableRowChange} key={value.key === undefined ? index : value.key} {...props} rowData={value}>
                </TableRow>
            )
        }
    )

    return (
        <props.Component.TableBodyType>
            {rows}
        </props.Component.TableBodyType>
    )
}

export default TableRows;