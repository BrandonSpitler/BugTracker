
import React from 'react'
import Input from '../../UI/Input'

const UserCnfg = (props) => {

    const changeUserName = (newName) => {
        props.changeUser(props.index, { ...props.user, name: newName })
    }

    const changeUserEmail = (newEmail) => {
        props.changeUser(props.index, { ...props.user, email: newEmail })
    }

    return (
        <tr>
            <td>
                <Input changeEventHandler={changeUserName}></Input>
            </td>
            <td>
                <Input changeEventHandler={changeUserEmail}></Input>
            </td>
        </tr>
    )
}

export default UserCnfg