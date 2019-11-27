import React, { Component } from 'react';
import BugContainer from '../../container/BugSpan/BugStage/BugContainer';
import BugContainerCnfg from './BugContainerCnfg';
import { connect } from 'react-redux'
import { ADD_CONTAINER, CHANGE_CONTAINER } from '../../reducers/reducerActions'
// todo add remove button
// todo add key to bug container names
class BugContainersCnfg extends Component {
    addBugContainerHandler = () => {
        this.props.addContainer(this.props.workspaceName, { containerName: '' })
    };

    setBugContainerName = (index, value) => {
        const newContainer = { ...this.props.bugContainers[index], containerName: value }
        this.props.changeContainer(this.props.workspaceName, index, newContainer)
    }

    render() {
        let bugContainers = (
            this.props.bugContainers.map((props, index) => {
                return (<BugContainerCnfg index={index} setBugContainerName={this.setBugContainerName}></BugContainerCnfg>)
            })
        )
        return (
            <div>
                {bugContainers}
                <button type="button" className="btn btn-primary" onClick={this.addBugContainerHandler}>
                    Add bugContainer
                </button>
            </div >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addContainer: (workspaceName, newContainer) => dispatch({ type: ADD_CONTAINER, workspaceName: workspaceName, newContainer: newContainer }),
        changeContainer: (workspaceName, index, newContainer) => dispatch({ type: CHANGE_CONTAINER, workspaceName: workspaceName, index: index, newContainer: newContainer })
    }
}

const mapPropsToState = (state, ownProps) => {
    if (state.cnfgReducer[ownProps.workspaceName] == undefined) {
        return {
            workspaceName: ownProps.workspaceName,
            bugContainers: []
        };
    } else {
        return {
            workspaceName: ownProps.workspaceName,
            bugContainers: state.cnfgReducer[ownProps.workspaceName].containers.slice()
        };
    }
};

export default connect(mapPropsToState, mapDispatchToProps)(BugContainersCnfg);