import React from 'react'
import TableCell from './TableCell'


const TableHeader = (props) => {
    let HeaderRows = props.columns.map(
        (columnValue, index) => {
            return (
                <TableCell {...props} key={columnValue.field} Component={{ TableCellType: props.Component.TableHeaderCellType }}>
                    {columnValue.columnName}
                </TableCell >
            )
        })
    return (
        <props.Component.TableHeaderType>
            <props.Component.TableHeaderRowType>
                {HeaderRows}
            </props.Component.TableHeaderRowType>
        </props.Component.TableHeaderType>
    )
}

export default TableHeader;