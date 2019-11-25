import BugContainerToBugContainerCnfg from "./BugContainerToBugContainerCnfg"
import React from 'react'

const SubContainers = (props) => {
    let SubContainers = props.SubContainers.map((value, index) => {
        return (<BugContainerToBugContainerCnfg></BugContainerToBugContainerCnfg>)
    }
    );
    return (
        <div>
            {SubContainers}
        </div>
    )
}

export default SubContainers;