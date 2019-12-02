import React from 'react'

const TableCell = (props) => {
    const onChange = (value) => {
        props.onChange(props.fieldName, value);
    }

    return (
        <props.Component.TableCellType onChange={onChange} {...props}>
            {props.value}
        </props.Component.TableCellType>
    )
}

export default TableCell