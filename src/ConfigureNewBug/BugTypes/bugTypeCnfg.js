import React from 'react'
import BugContainerToBugContainerCnfg from './BugContainerToBugContainerCnfg'

const bugTypeCnfg = (props) => {
    return (
        <div>
            <input defaultValue="Bug Type" onChange={(event) => props.setBugName(props.index, event.target.value)} value={props.bugName} type="text"></input>
            <button className="btn btn-danger" onClick={() => props.deleteBugType(props.index)}>Delete Bug Type</button>
            <div><BugContainerToBugContainerCnfg workspaceName={props.workspaceName}></BugContainerToBugContainerCnfg></div>
        </div>
    )
}

export default bugTypeCnfg;