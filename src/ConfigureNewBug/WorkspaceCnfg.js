import React from 'react'


const WorkSpaceCnfg = props => {
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