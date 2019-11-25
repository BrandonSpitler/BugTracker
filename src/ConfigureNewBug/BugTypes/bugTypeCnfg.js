import React from 'react'
import BugContainerToBugContainerCnfg from './BugContainerToBugContainerCnfg'

const bugTypeCnfg = (props) => {
    return (
        <form>
            <input defaultValue="Bug Type" type="text"></input>
            <input defaultValue="Starting Containter" type="text"></input>
            <BugContainerToBugContainerCnfg></BugContainerToBugContainerCnfg>
        </form>
    )
}

export default bugTypeCnfg;