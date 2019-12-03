import React from 'react'

const RoleCnfg = (props) => {
    return (
        <div>
            <label>Role:</label>
            <input onChange={(event) => props.onRoleChange(props.index, event.target.value)} value={props.value.Role}></input>
        </div>
    )
}

export default RoleCnfg;