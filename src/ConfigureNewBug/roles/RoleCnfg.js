import React from 'react'
import TableUX from '../../UI/table-UX-Dsgn/TableUX'
import { defaultContainer } from '../../UI/table-wrapper/defaultProps'
import { connect } from 'react-redux'
import Select from '../../UI/Select'

const RoleCnfg = (props) => {
    let dataValues = props.Users.map(
        (value, _) => {
            return (value.email)
        })
    dataValues.push('')
    let columns = [
        {
            columnName: 'Users',
            field: 'UsersRole',
            TableCellType: (props) => {
                return (
                    <td>
                        <Select autoFocus
                            valueName='Email'
                            decodeName='Email'
                            value={props.Users.UsersRole}
                            selectItemArray={props.Users}
                            changeHandler={(value) => props.onChange(props.fieldName, value)}>
                        </Select>
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