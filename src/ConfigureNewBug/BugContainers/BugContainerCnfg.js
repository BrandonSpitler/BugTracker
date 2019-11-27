import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'

const bugContainerCnfg = (props) => {

    return (
        <div>
            <input
                name="BugContainerName"
                type="text"
                defaultValue="Bug Container"
                onChange={(event) => props.setBugContainerName(props.index, event.target.value)}
            />
        </div>

    )
}

export default bugContainerCnfg;