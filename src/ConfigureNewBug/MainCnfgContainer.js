import React, { Component } from 'react';
import WorkspaceCnfg from './WorkspaceCnfg';
import BugContainersCnfg from './BugContainers/BugContainersCnfg';
import { connect } from 'react-redux'
import BugTypesCnfg from './BugTypes/BugTypesCnfg';
import { CHANGE_WORKSPACE_NAME } from '../reducers/reducerActions'
import UsersCnfg from './users/UsersCnfg';
import RolesCnfg from './roles/RolesCnfg';


class MainCnfgContainer extends Component {
    state = {
        workSpaceName: 'workspacename',
        Users: [],
        Containers: []

    }
    setWorkspaceName = (newWorkspaceName) => {
        this.props.changeWorkSpace(this.state.workSpaceName, newWorkspaceName)
        this.setState({
            workspaceName: newWorkspaceName
        })
    }

    changeUser = (index, newValue) => {
        let newUsers = this.state.Users.slice()
        if (index === -1) {
            newUsers.push(newValue)
        } else {
            newUsers[index] = newValue
        }
        this.setState({
            Users: newUsers
        })
    }

    changeContainer = (index, newValue) => {
        let newContainers = this.state.Containers.slice();
        if (index === -1) {
            newContainers.push(newValue)
        } else {
            newContainers[index] = newValue
        }
        this.setState({
            Containers: newContainers
        })
    }

    render() {
        return (

            <div>
                <WorkspaceCnfg setWorkspaceName={this.setWorkspaceName} ></WorkspaceCnfg>
                <BugContainersCnfg bugContainers={this.state.Containers} changeContainer={this.changeContainer} workspaceName={this.state.workspaceName}></BugContainersCnfg>
                <BugTypesCnfg bugContainers={this.state.Containers} workspaceName={this.state.workspaceName}></BugTypesCnfg>
                <UsersCnfg Users={this.state.Users} changeUser={this.changeUser} workspaceName={this.state.workspaceName}></UsersCnfg>
                <RolesCnfg Users={this.state.Users} workspaceName={this.state.workspaceName}></RolesCnfg>
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