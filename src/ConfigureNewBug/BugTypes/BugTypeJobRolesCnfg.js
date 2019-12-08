import React from 'react'
import TableUX from '../../UI/table-UX-Dsgn/TableUX'
import { defaultContainer } from '../../UI/table-wrapper/defaultProps'
import Input from '../../UI/Input'

const Columns = [
    {
        columnName: 'Bugs User Roles',
        field: 'bugJobRoles',
        TableCellType: (props) => {
            return (
                <td>
                    <input onChange={(event) => props.onChange(props.fieldName, event.target.value)}></input>
                </td>
            )
        }
    }
]


const BugTypeJobRolesCnfg = (props) => {

    const addRole = () => {
        props.changeBugJobRoles(-1, { bugJobRoles: '' })
    }

    const changeRole = (index, value) => {
        props.changeBugJobRoles(index, value)
    }

    const deleteRole = (index) => {
        props.changeBugJobRoles(index, { deleted: true })
    }

    return (
        <TableUX Component={{ ...defaultContainer }}
            columns={Columns.slice()}
            tableData={props.BugJobRoles.slice()}
            addRow={addRole}
            deleteRow={deleteRole}
            onRowChange={changeRole}>
        </TableUX>
    )
}

export default BugTypeJobRolesCnfg;