import BugContainerToBugContainerCnfg from "./BugContainerToBugContainerCnfg"
import React from 'react'

const SubContainers = (props) => {
    let SubContainers = props.subBugContainers.map((value, index) => {
        return (
            <li>
                <BugContainerToBugContainerCnfg
                    containerName={value.containerName}
                    subBugContainers={value.subBugContainers}
                    bugContainers={props.bugContainers}
                    deleteContainer={props.deleteContainer}
                    workspaceName={props.workspaceName}
                    modifiedContainer={props.modifyContainer}
                    index={index}
                    BugJobRoles={props.BugJobRoles}>
                </BugContainerToBugContainerCnfg>
            </li>)
    }
    );
    let returnValue;
    if (SubContainers.length > 0) {
        returnValue = (
            <ul className="Box">
                {SubContainers}
            </ul>
        )
    } else {
        returnValue = (<div></div>)
    }
    return (
        returnValue
    )
}

export default SubContainers;