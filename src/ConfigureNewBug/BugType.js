import React, { Component } from 'react'

class BugType extends Component {
    state = {
        BugContainers: []
    }
    BugTypeSubmitHandler = (event) => {

    }

    render() {


        return (
            <form onSubmit={this.BugTypeSubmitHandler}>

            </form>
        )
    }
}

export default BugType;