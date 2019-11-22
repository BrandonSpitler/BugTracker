import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'


const bugType = props => {

    const BugTypeSubmitHandler = (event) => {

    }
    return (
        <div>
            <Form onSubmit={BugTypeSubmitHandler}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form>
                        <div>Test</div>
                    </form>
                )
                }>
            </Form>
        </div>

    )
}

export default bugType;