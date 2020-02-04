import React, { Component } from 'react'
import BugContainerToBugContainerCnfg from './BugContainerToBugContainerCnfg'
import TableUX from '../../UI/table-UX-Dsgn/TableUX'
import BugTypeJobRolesCnfg from './BugTypeJobRolesCnfg'

class BugTypeCnfg extends Component {
    state = {
        containerName: '',
        BugJobRoles: [],
        subBugContainers: [],
        subBugRole: ''
    }

    modifiedContainer = (newState) => {
        this.setState(
            { ...newState }
        )
    }

    changeBugJobRoles = (index, value) => {
        let newBugJobRoles = this.state.BugJobRoles.slice();
        if (index !== -1) {
            newBugJobRoles[index] = value;
        } else {
            newBugJobRoles.push(value)
        }
        this.setState({
            BugJobRoles: newBugJobRoles
        })
    }

    render() {
        return (
            <div>
                <input defaultValue="Bug Type" onChange={(event) => this.props.setBugName(this.props.index, event.target.value)} value={this.props.bugName} type="text"></input>
                <button className="btn btn-danger" onClick={() => this.props.deleteBugType(this.props.index)}>Delete Bug Type</button>
                <BugTypeJobRolesCnfg BugJobRoles={this.state.BugJobRoles}
                    changeBugJobRoles={this.changeBugJobRoles}>
                </BugTypeJobRolesCnfg>
                <div>
                    <BugContainerToBugContainerCnfg
                        subBugRole={this.state.subBugRole}
                        workspaceName={this.props.workspaceName}
                        containerName={this.state.containerName}
                        subBugContainers={this.state.subBugContainers}
                        modifiedContainer={this.modifiedContainer}
                        bugContainers={this.props.bugContainers}
                        BugJobRoles={this.state.BugJobRoles}
                    >
                    </BugContainerToBugContainerCnfg>
                </div>
            </div >
        )
    }
}

export default BugTypeCnfg;