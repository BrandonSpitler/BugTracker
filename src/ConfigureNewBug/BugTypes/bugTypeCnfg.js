import React, { Component } from 'react'
import BugContainerToBugContainerCnfg from './BugContainerToBugContainerCnfg'

class BugTypeCnfg extends Component {
    state = {
        containerName: '',
        subBugContainers: []
    }

    modifiedContainer = (newState) => {
        this.setState(
            { ...newState }
        )
    }

    render() {
        return (
            <div>
                <input defaultValue="Bug Type" onChange={(event) => this.props.setBugName(this.props.index, event.target.value)} value={this.props.bugName} type="text"></input>
                <button className="btn btn-danger" onClick={() => this.props.deleteBugType(this.props.index)}>Delete Bug Type</button>
                <div>
                    <BugContainerToBugContainerCnfg
                        workspaceName={this.props.workspaceName}
                        containerName={this.state.containerName}
                        subBugContainers={this.state.subBugContainers}
                        modifiedContainer={this.modifiedContainer}
                        bugContainers={this.props.bugContainers}
                    >
                    </BugContainerToBugContainerCnfg>
                </div>
            </div >
        )
    }
}

export default BugTypeCnfg;