import React, { Component } from 'react';
import WorkspaceCnfg from './WorkspaceCnfg';
import BugContainersCnfg from './BugContainers/BugContainersCnfg';
import { connect } from 'react-redux'
import BugTypesCnfg from './BugTypes/BugTypesCnfg';
import { CHANGE_WORKSPACE_NAME } from '../reducers/reducerActions'
import UsersCnfg from './users/UsersCnfg';


class MainCnfgContainer extends Component {
    state = {
        workspaceName: ''
    }
    setWorkspaceName = (newWorkspaceName) => {
        this.props.changeWorkSpace(this.state.workspaceName, newWorkspaceName)
        this.setState({
            workspaceName: newWorkspaceName
        })
    }

    render() {
        return (

            <div>
                <WorkspaceCnfg setWorkspaceName={this.setWorkspaceName} ></WorkspaceCnfg>
                <BugContainersCnfg workspaceName={this.state.workspaceName}></BugContainersCnfg>
                <BugTypesCnfg workspaceName={this.state.workspaceName}></BugTypesCnfg>
                <UsersCnfg></UsersCnfg>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeWorkSpace: (oldWorkSpaceName, newWorkspaceName) => dispatch({ type: CHANGE_WORKSPACE_NAME, oldWorkSpaceName: oldWorkSpaceName, newWorkspaceName: newWorkspaceName })
    }
}


export default connect(null, mapDispatchToProps)(MainCnfgContainer);