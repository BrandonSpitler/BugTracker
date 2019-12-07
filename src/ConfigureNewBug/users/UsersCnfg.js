
import React, { Component, useEffect } from 'react';
import UserCnfg from './UserCnfg';
import { defaultContainer } from '../../UI/table-wrapper/defaultProps';
import TableUX from '../../UI/table-UX-Dsgn/TableUX';
import { connect } from 'react-redux'
import { DELETE_USER, UPDATE_USER, ADD_USER } from './../../reducers/reducerActions'


class UsersCnfg extends Component {
    columns = [
        {

            columnName: 'User',
            field: 'user',
            TableCellType: (props) => {
                return (
                    <td>
                        <input autoFocus onChange={(event) => props.onChange(props.fieldName, event.target.value)}></input>
                    </td>
                )
            }
        },
        {
            columnName: 'Email',
            field: 'email',
            TableCellType: (props) => {
                return (
                    <td>
                        <input onChange={(event) => props.onChange(props.fieldName, event.target.value)}></input>
                    </td>
                )
            }
        }
    ]

    onUserRowChange = (index, value) => {
        this.props.changeUser(this.props.workspaceName, index, value)
    }

    deleteRow = (index) => {
        this.props.changeUser(index, { deleted: true })
    }

    addUser = () => {
        this.props.changeUser(-1, {
            email: '',
            user: ''
        })
    }

    render() {
        return (
            <TableUX Component={{ ...defaultContainer }}
                columns={this.columns.slice()}
                tableData={this.props.Users.slice()}
                onRowChange={this.onUserRowChange}
                addRow={this.addUser}
                deleteRow={this.deleteRow}>
            </TableUX>
        )
    }
}

export default UsersCnfg