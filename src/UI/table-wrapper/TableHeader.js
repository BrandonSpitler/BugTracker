import React from 'react'
import TableCell from './TableCell'
import PropTypes, { object } from 'prop-types';


const TableHeader = (props) => {
    let HeaderRows = props.columns.map(
        (columnValue, index) => {
            return (
                <TableCell {...props} value={columnValue.columnName} key={columnValue.field} Component={{ TableCellType: props.Component.TableHeaderCellType }}>

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

const ColumnPropType = {
    columnName: PropTypes.string,
    field: PropTypes.string.isRequired
}

TableHeader.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape(ColumnPropType).isRequired).isRequired,
    Component: PropTypes.shape({
        TableHeaderType: PropTypes.elementType.isRequired,
        TableHeaderRowType: PropTypes.elementType.isRequired,
        TableHeaderCellType: PropTypes.elementType.isRequired
    })
}

export default TableHeader;