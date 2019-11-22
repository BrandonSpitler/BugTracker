import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'

const bugContainerCnfg = (props) => {

    return (
        <div>
            <Form onSubmit={props.saveBugContainerCnfg}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form>
                        <Field
                            name="BugContainerName"
                            component="input"
                            type="text"
                            placeholder="Bug Container"
                        />
                    </form>
                )
                }>
            </Form>
        </div>
    )
}

export default bugContainerCnfg;