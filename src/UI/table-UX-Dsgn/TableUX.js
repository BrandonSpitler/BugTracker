import React, { Component } from 'react';
import Table from '../table-wrapper/Table';
import { defaultContainer } from '../table-wrapper/defaultProps';
import { DefaultTableHeaderRowUX } from './defaultComponentsTableUX';


function getSortedUXData(UXToBackgroundDataIndexs, sortedColumns, columns, tableData) {
    const compare = (firstValue, secondValue) => {
        const arrayLength = sortedColumns.length;
        for (var i = 0; i < arrayLength; i++) {
            const columnIndex = sortedColumns[i].index;
            const a = sortedColumns[i].desc ? firstValue : secondValue;
            const b = !sortedColumns[i].desc ? firstValue : secondValue;
            const dataFieldName = columns[columnIndex].field;

            if (tableData[a][dataFieldName] > tableData[b][dataFieldName]) {
                return 1;
            } else if (tableData[a][dataFieldName] < tableData[b][dataFieldName]) {
                return -1;
            }
        }
        return 0;
    }

    const newUXToBackgroundDataIndexs = UXToBackgroundDataIndexs.slice();
    newUXToBackgroundDataIndexs.sort(compare);
    return (newUXToBackgroundDataIndexs);
}


function OrderDisplayData(UXToBackgroundDataIndexs, tableData) {
    const newDisplayData = [];
    UXToBackgroundDataIndexs.forEach(
        (originalIndex, _) => {
            newDisplayData.push({ ...tableData[originalIndex], key: originalIndex })
        }
    )
    return newDisplayData;
}


class TableUX extends Component {

    state = {
        sortedColumns: [],
        UXToBackgroundDataIndexs: []
    }


    onRowChange = (index, value) => {
        this.props.onRowChange(this.state.UXToBackgroundDataIndexs[index], value)
    }

    onTableHeaderClick = (columnIndex) => {
        const newSortedColumns = this.state.sortedColumns.slice()
        const sortedColumnIndex = newSortedColumns.findIndex(value => value.index === columnIndex)
        if (sortedColumnIndex !== - 1) {
            if (newSortedColumns[sortedColumnIndex].desc) {
                newSortedColumns[sortedColumnIndex].desc = false
            } else {
                newSortedColumns.splice(sortedColumnIndex, 1)
            }
        } else {
            newSortedColumns.push(
                {
                    index: columnIndex,
                    desc: true
                }
            )
        }
        this.setState({
            sortedColumns: newSortedColumns
        }, this.sortAndSetUXDataState)
    }

    static getDerivedStateFromProps(props, state) {
        const newState = { ...state }
        let newUXToBackgroundDataIndexs = [];
        props.tableData.forEach(
            (value, index) => {
                if (!value.deleted) {
                    newUXToBackgroundDataIndexs.push(index)
                }
            }
        )
        newState.UXToBackgroundDataIndexs = getSortedUXData(newUXToBackgroundDataIndexs, newState.sortedColumns, props.columns, props.tableData);
        return newState;
    }

    sortAndSetUXDataState = () => {
        this.setState({
            UXToBackgroundDataIndexs: getSortedUXData(
                this.state.UXToBackgroundDataIndexs.slice(),
                this.state.sortedColumns.slice(),
                this.props.columns,
                this.props.tableData
            )
        })
    }

    addRow = () => {
        this.props.addRow()
    }

    deleteRow = (dataIndex) => {
        this.props.deleteRow(this.state.UXToBackgroundDataIndexs[dataIndex])
    }

    render() {
        let displayData = OrderDisplayData(this.state.UXToBackgroundDataIndexs, this.props.tableData)
        let newColumns = this.props.columns.slice()

        if (this.props.deleteRow !== undefined) {
            newColumns.push({
                columnName: '',
                field: 'actions',
                TableCellType: (props) => {
                    return (
                        <td>
                            <button onClick={() => this.deleteRow(props.dataIndex)}>Delete</button>
                        </td>
                    )
                }
            })
        }

        return (
            <div>
                <Table
                    columns={newColumns.slice()}
                    tableData={displayData}
                    Component={{ ...defaultContainer, TableHeaderCellType: DefaultTableHeaderRowUX }}
                    Column={{
                        onClick: this.onTableHeaderClick,
                        sortColumns: this.state.sortedColumns
                    }}
                    onRowChange={this.onRowChange}
                >
                </Table >
                <button onClick={this.addRow}>Add</button>
            </div>
        )
    }
}

export default TableUX