import React, { Component } from 'react';

const DefaultTableHeader = (props) => {
    return (
        <thead>
            {props.children}
        </thead>
    )
}

const DefaultTableHeaderRow = (props) => {
    return (
        <th>
            {props.children}
        </th>
    )
}

const DefaultTableRow = (props) => {
    return (
        <tr>
            {props.children}
        </tr>
    )
}
const DefaultTableCell = (props) => {


    return (
        <td>
            {props.children}
        </td>
    )
}

const DefaultTableBody = (props) => {
    return (
        <tbody>
            {props.children}
        </tbody>
    )
}

const DefaultTableType = (props) => {
    return (
        <table>
            {props.children}
        </table>
    )
}

const DefaultTableHeaderRowType = (props) => {
    return (
        <tr>
            {props.children}
        </tr>
    )
}

export const defaultContainer = {
    TableHeaderType: DefaultTableHeader,
    TableType: DefaultTableType,
    TableCellType: DefaultTableCell,
    TableRowType: DefaultTableRow,
    TableBodyType: DefaultTableBody,
    TableHeaderCellType: DefaultTableHeaderRow,
    TableHeaderRowType: DefaultTableHeaderRowType
}