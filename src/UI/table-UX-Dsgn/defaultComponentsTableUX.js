import React from 'react';

const upArrow = '\u2191';
const downArrow = '\u2193'
export const DefaultTableHeaderRowUX = (props) => {
    let index = props.Column.sortColumns.findIndex(
        value => {
            return value.index === props.columnIndex
        }
    )
    let arrows = '';
    let i;
    for (i = 0; i <= index; i++) {
        arrows += (props.Column.sortColumns[index].desc ? downArrow : upArrow)
    }
    return (
        <th onClick={() => props.Column.onClick(props.columnIndex)}>
            {props.children + arrows}
        </th>
    )
}
