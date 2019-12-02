import React from 'react'
import TableRow from './TableRow'
import PropTypes, { object } from 'prop-types';

const TableRows = (props) => {
    let rows = (props.MapTableDateToRows ? props.MapTableDataToRows(props) : props.tableData.map(
        (value, index) => {
            return (
                <TableRow dataIndex={index} onChange={props.onTableRowChange} key={value.key === undefined ? index : value.key} {...props} rowData={value}>
                </TableRow>
            )
        }
    ))

    return (
        < props.Component.TableBodyType >
            {rows}
        </props.Component.TableBodyType >
    )
}

TableRow.propTypes = {
    onTableRowChange: PropTypes.func,
    MapTableDataToRows: PropTypes.func
}

export default TableRows;