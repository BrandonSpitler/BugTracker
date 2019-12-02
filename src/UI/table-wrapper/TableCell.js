import React from 'react'

const TableCell = (props) => {

    return (
        <props.Component.TableCellType {...props}>
            {props.value}
        </props.Component.TableCellType>
    )
}

export default TableCell