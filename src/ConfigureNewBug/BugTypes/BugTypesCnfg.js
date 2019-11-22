import React, { Component } from 'react'
import BugTypeCnfg from './bugTypeCnfg'
class BugTypesCnfg extends Component {
    state = {
        bugTypes: []
    }

    addBugType = () => {
        let bugTypes = this.state.bugTypes.slice()
        bugTypes.push({});
        this.setState({
            bugTypes: bugTypes
        })
    }

    render() {
        let bugTypes = this.state.bugTypes.map((props, index) => {
            return (
                <BugTypeCnfg></BugTypeCnfg>
            )
        })

        return (
            <div>
                {bugTypes}
                <button type="button" class="btn btn-primary" onClick={this.addBugType}>Add Bug Type</button>
            </div>
        )
    }
}

export default BugTypesCnfg;