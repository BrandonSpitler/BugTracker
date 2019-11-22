import React, { Component } from 'react';
import BugContainer from '../../container/BugSpan/BugStage/BugContainer';
import BugContainerCnfg from './BugContainerCnfg';
// todo add remove button
// todo add key to bug container names
class BugContainersCnfg extends Component {
    state = {
        bugContainers: []
    }

    addBugContainerHandler = () => {
        let bugContainers = this.state.bugContainers;
        bugContainers.push({});
        this.setState(
            {
                bugContainers: bugContainers
            }

        )
    };

    saveBugContainerConfg = () => {

    }

    render() {
        let bugContainers = (
            this.state.bugContainers.map((props, index) => {
                return (<BugContainerCnfg saveBugContainerCnfg={this.saveBugContainerConfg}></BugContainerCnfg>)
            })
        )
        return (
            <div>
                {bugContainers}
                <button type="button" class="btn btn-primary" onClick={this.addBugContainerHandler}>
                    Add bugContainer
                </button>
            </div >
        )
    }
}

export default BugContainersCnfg;