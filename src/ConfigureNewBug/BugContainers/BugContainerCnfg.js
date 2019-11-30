import React from 'react'

const bugContainerCnfg = (props) => {
    return (
        <div>
            <input
                name="BugContainerName"
                type="text"
                defaultValue="Bug Container"
                value={props.bugContainerName}
                onChange={(event) => props.setBugContainerName(props.index, event.target.value)}
            />
            <button className="btn btn-danger" onClick={() => props.deleteBugContainer(props.index)}>Delete Container</button>
        </div>

    )
}

export default bugContainerCnfg;