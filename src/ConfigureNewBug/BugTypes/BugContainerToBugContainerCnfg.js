import React, { Component } from 'react';
import SubContainers from './SubContainers';
//todo add validation rules
// make cug containers arent looped
//make sure bug containers arent duplicated

class BugContainerToBugContainerCnfg extends Component {
    state = {
        subBugContainers: []
    }

    AddSubContainer = (props) => {
        let subBugContainers = this.state.subBugContainers.slice();
        subBugContainers.push();
        this.setState(
            { subBugContainers: subBugContainers }
        );
    }

    render() {

        return (
            <div>
                <input type="text" defaultValue="Starting Bug Container">
                </input>
                <SubContainers SubContainers={this.state.subBugContainers}></SubContainers>
                <button onClick={this.AddSubContainer}>Add container</button>
            </div>
        )
    }
}

export default BugContainerToBugContainerCnfg