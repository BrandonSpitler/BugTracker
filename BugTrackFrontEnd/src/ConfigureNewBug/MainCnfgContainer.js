import React, { Component } from 'react';
import WorkspaceCnfg from './WorkspaceCnfg';
import BugContainersCnfg from './BugContainers/BugContainersCnfg';
import { connect } from 'react-redux'
import BugTypesCnfg from './BugTypes/BugTypesCnfg';
import { CHANGE_WORKSPACE } from '../reducers/reducerActions'
import UsersCnfg from './users/UsersCnfg';
import RolesCnfg from './roles/RolesCnfg';
import { withRouter } from 'react-router-dom'


class MainCnfgContainer extends Component {

    setWorkspaceName = (newWorkspaceName) => {
        this.changeWorkSpace({
            workspaceName: newWorkspaceName
        })
    }

    changeUser = (index, newValue) => {
        let newUsers = this.props.WorkSpaceState.Users.slice()
        if (index === -1) {
            newUsers.push(newValue)
        } else {
            newUsers[index] = newValue
        }
        this.changeWorkSpace({
            Users: newUsers
        })
    }

    changeContainer = (index, newValue) => {
        let newContainers = this.props.WorkSpaceState.Containers.slice();
        if (index === -1) {
            newContainers.push(newValue)
        } else {
            newContainers[index] = newValue
        }
        this.changeWorkSpace(
            {
                Containers: newContainers
            })
    }

    changeWorkSpace(newWorkspace) {
        this.props.changeWorkSpace(this.props.workspaceId, { ...this.props.WorkSpaceState, ...newWorkspace })
    }

    render() {
        return (

            <div>
                <WorkspaceCnfg workspaceName={this.props.WorkSpaceState.workspaceName} setWorkspaceName={this.setWorkspaceName} ></WorkspaceCnfg>
                <BugContainersCnfg bugContainers={this.props.WorkSpaceState.Containers} changeContainer={this.changeContainer} workspaceName={this.props.WorkSpaceState.workspaceName}></BugContainersCnfg>
                <BugTypesCnfg bugContainers={this.props.WorkSpaceState.Containers} workspaceName={this.props.WorkSpaceState.workspaceName}></BugTypesCnfg>
                <UsersCnfg Users={this.props.WorkSpaceState.Users} changeUser={this.changeUser} workspaceName={this.props.WorkSpaceState.workspaceName}></UsersCnfg>
                <RolesCnfg Users={this.props.WorkSpaceState.Users} workspaceName={this.props.WorkSpaceState.workspaceName}></RolesCnfg>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    let newState = { ...ownProps }
    newState.workspaceId = Number(ownProps.match.params.id)
    newState.NewWorkspaceCnfg = false;
    newState.WorkSpaceState = state.cnfgReducer.workSpaces[Number(ownProps.match.params.id)];
    return newState;
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeWorkSpace: (workspaceId, newWorkspaceState) => dispatch(
            {
                type: CHANGE_WORKSPACE,
                workspaceId: workspaceId,
                newWorkspaceState: newWorkspaceState
            }
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainCnfgContainer));