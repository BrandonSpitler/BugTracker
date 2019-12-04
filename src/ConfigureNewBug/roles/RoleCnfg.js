import React from 'react'
import TableUX from '../../UI/table-UX-Dsgn/TableUX'
import { defaultContainer } from '../../UI/table-wrapper/defaultProps'

const RoleCnfg = (props) => {
    let columns = [
        {
            columnName: 'Users',
            field: 'UsersRole',
            TableCellType: (props) => {
                return (
                    <td>
                        <input autoFocus onChange={(event) => props.onChange(props.fieldName, event.target.value)}></input>
                    </td>
                )
            }
        }
    ]

    const ChangeRolesUsers = (index, value) => {
        const data = props.data.UsersRoles.slice();
        data[index] = value
        props.ChangesUsersRoles(props.index, data);
    }

    const deleteUsersRole = (index) => {
        const data = props.data.UsersRoles.slice();
        data[index] = {
            UsersRole: '',
            delete: true
        }
        props.ChangesUsersRoles(props.index, data);
    }

    const addUserToRole = () => {
        const data = props.data.UsersRoles.slice();
        data.push({
            UsersRole: ''
        })
        props.ChangesUsersRoles(props.index, data)
    }

    return (
        <div>
            <label>Role:</label>
            <input autoFocus onChange={(event) => props.onRoleChange(props.index, event.target.value)} value={props.data.Role}></input>
            <TableUX Component={{ ...defaultContainer }}
                columns={columns.slice()}
                tableData={props.data.UsersRoles.slice()}
                addRow={addUserToRole}
                onRowChange={ChangeRolesUsers}
                deleteRow={deleteUsersRole}>
            </TableUX>
        </div>
    )
}

export default RoleCnfg;