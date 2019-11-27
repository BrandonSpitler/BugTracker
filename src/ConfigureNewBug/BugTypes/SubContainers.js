import BugContainerToBugContainerCnfg from "./BugContainerToBugContainerCnfg"
import React from 'react'

const SubContainers = (props) => {
    let SubContainers = props.SubContainers.map((value, index) => {
        return (<li><BugContainerToBugContainerCnfg workspaceName={props.workspaceName}></BugContainerToBugContainerCnfg></li>)
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