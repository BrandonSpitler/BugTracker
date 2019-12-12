import React, { Component } from 'react'
import BugTypeCnfg from './BugTypeCnfg'
class BugTypesCnfg extends Component {
    state = {
        bugTypes: []
    }

    addBugType = () => {
        let bugTypes = this.state.bugTypes.slice()
        bugTypes.push({ bugName: 'new bug type' });
        this.setState({
            bugTypes: bugTypes
        })
    }

    deleteBugType = (index) => {
        let bugTypes = this.state.bugTypes.slice()
        bugTypes.splice(index, 1)
        this.setState({
            bugTypes: bugTypes
        })
    }

    setBugName = (index, newName) => {
        let bugTypes = this.state.bugTypes.slice()
        bugTypes[index].bugName = newName
        this.setState({
            bugTypes: bugTypes
        })
    }

    render() {
        let bugTypes = this.state.bugTypes.map((props, index) => {
            return (
                <BugTypeCnfg
                    bugContainers={this.props.bugContainers}
                    bugName={props.bugName}
                    setBugName={this.setBugName}
                    workspaceName={this.props.workspaceName}
                    deleteBugType={this.deleteBugType}
                    index={index}></BugTypeCnfg>
            )
        })

        return (
            <div>
                {bugTypes}
                <button type="button" className="btn btn-primary" onClick={this.addBugType}>Add Bug Type</button>
            </div>
        )
    }
}

export default BugTypesCnfg;