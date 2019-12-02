import React from 'react'
import TableCell from './TableCell'
import PropTypes from 'prop-types';

//array of filed names

const TableRow = (props) => {
    const onTableCellChange = (fieldName, value) => {
        const newCellValue = { ...props.rowData };
        newCellValue[fieldName] = value;
        props.onChange(props.dataIndex, { ...newCellValue });
    }

    let tableCells = (props.MapRowToCellsOverride ? props.MapRowToCellsOverride(props) : props.columns.map(
        (column) => {

            const TableCellType = (
                (props.Row.TableCellType) ? //if
                    props.Component.TableCellType
                    : (column.TableCellType) ? //else if
                        column.TableCellType
                        : //else
                        props.Component.TableCellType
            )

            return (
                <TableCell  {...props}
                    onChange={onTableCellChange}
                    key={props.rowData[column.field]}
                    value={props.rowData[column.field]}
                    Component={
                        {
                            ...props.Component,
                            TableCellType: column.TableCellType === undefined ?
                                props.Component.TableCellType : column.TableCellType
                        }}>
                </TableCell>
            )
        }
    ))

    return (
        <props.Component.TableRowType>
            {tableCells}
        </props.Component.TableRowType>
    )
}

TableRow.propTypes = {
    onTableCellChange: PropTypes.func,
    MapRowToCellsOverride: PropTypes.func,
    columns: PropTypes.arrayOf(
        PropTypes.shape(
            {
                field: PropTypes.string.isRequired,
                TableCellType: PropTypes.elementType
            }
        )
    ).isRequired,
    Component: PropTypes.shape({
        TableHeaderType: PropTypes.elementType.isRequired,
        TableHeaderRowType: PropTypes.elementType.isRequired,
        TableHeaderCellType: PropTypes.elementType.isRequired
    }),
    Row: PropTypes.shape({
        TableCellType: PropTypes.elementType
    })
}

export default TableRow;