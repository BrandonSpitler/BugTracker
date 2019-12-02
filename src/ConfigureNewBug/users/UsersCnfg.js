
import React, { Component } from 'react';
import UserCnfg from './UserCnfg';
import { defaultContainer } from '../../UI/table-wrapper/defaultProps';
import TableUX from '../../UI/table-UX-Dsgn/TableUX';


class UsersCnfg extends Component {
    state = {
        Users: []
    }


    columns = [
        {
            columnName: 'User',
            field: 'user',
            TableCellType: (props) => {
                return (
                    <td>
                        <input onChange={(event) => props.onChange(props.fieldName, event.target.value)}></input>
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
        let newTableData = this.state.Users.slice()
        newTableData[index] = value
        this.setState({
            Users: newTableData
        })
    }

    addUser = () => {
        const newUsers = this.state.Users.slice();
        newUsers.push({
            email: '',
            user: ''
        })
        this.setState({
            Users: newUsers
        })
    }

    render() {
        return (

            <TableUX Component={{ ...defaultContainer }}
                columns={this.columns.slice()}
                tableData={this.state.Users.slice()}
                onRowChange={this.onUserRowChange}
                addRow={this.addUser}>
            </TableUX>
        )

    }
}

export default UsersCnfg