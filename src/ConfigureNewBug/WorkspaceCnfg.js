import React, { Component } from 'react'


const WorkSpaceCnfg = props => {

    const BugTypeSubmitHandler = (event) => {

    }
    return (
        <div>
            <form>
                <input
                    name="workSpaceName"
                    type="text"
                    defaultValue="WorkspaceName"
                    onChange={(event) => props.setWorkspaceName(event.target.value)}
                />
            </form>
        </div>
    )
}

export default WorkSpaceCnfg;