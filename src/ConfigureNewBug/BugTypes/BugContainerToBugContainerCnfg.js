import React, { Component } from 'react';
import SubContainers from './SubContainers';
import Select from '../../classes/UI/Select';
import { connect } from 'react-redux'

//todo add validation rules
// make cug containers arent looped
//make sure bug containers arent duplicated

class BugContainerToBugContainerCnfg extends Component {
    state = {
        subBugContainers: []
    }

    AddSubContainer = (props) => {
        let subBugContainers = this.state.subBugContainers.slice();
        subBugContainers.push({});
        this.setState(
            { subBugContainers: subBugContainers }
        );
    }

    render() {
        let bugContainersNames = Object.keys(this.props.bugContainers).map(i => (this.props.bugContainers[i].containerName));
        return (
            <div>
                <Select selectItemArray={bugContainersNames}></Select>
                <SubContainers workspaceName={this.props.workspaceName} SubContainers={this.state.subBugContainers}></SubContainers>
                <button onClick={this.AddSubContainer}>Add container</button>
            </div>
        )
    }
}

const mapPropsToState = (state, ownProps) => {
    return {
        bugContainers: state.cnfgReducer[ownProps.workspaceName].containers.slice()
    }

}

export default connect(mapPropsToState)(BugContainerToBugContainerCnfg)