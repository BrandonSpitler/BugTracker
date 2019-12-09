import React, { Component } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { CREATE_WORKSPACE } from '../reducers/reducerActions';
import { generatePath } from "react-router";

const LoadCnfgStr = 'LoadCnfg,';

class Navbar extends Component {
    state = {
        selected: 'home',
        expanded: false
    };

    onSelect = (selected) => {
        const loadCnfgPos = selected.indexOf(LoadCnfgStr)
        this.setState({ selected: selected });
        if (selected === 'NewCnfg') {
            this.props.CreateNewWorkspace()
            const path = generatePath('/LoadCnfg/:id', {
                id: this.props.maxWorkSpaceID
            })
            this.props.history.replace(path)
        } else if (loadCnfgPos !== -1) {
            const index = selected.substring(loadCnfgPos + LoadCnfgStr.length, selected.length);
            const path = generatePath('/LoadCnfg/:id', { id: index })
            this.props.history.replace(path)
        } else {
            this.props.history.replace(selected)
        }
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    navigate = (pathname) => () => {
        this.setState({ selected: pathname });
    };

    render() {
        let workSpaces = this.props.workSpaces.map((value) => {
            let eventKey = LoadCnfgStr + value.workspaceId
            return (
                <NavItem key={value.workspaceId} eventKey={eventKey}>
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                    </NavIcon>
                    <NavText style={{ paddingRight: 32 }} title={eventKey}>
                        {value.workspaceName}
                    </NavText>
                </NavItem>
            )
        })
        const { expanded, selected } = this.state;
        return (
            <SideNav onSelect={this.onSelect} onToggle={this.onToggle}>
                <SideNav.Toggle />
                <SideNav.Nav selected={selected}>
                    <NavItem eventKey="/home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                        </NavIcon>
                        <NavText style={{ paddingRight: 32 }} title="Home">
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="NewCnfg">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                        </NavIcon>
                        <NavText style={{ paddingRight: 32 }} title="NewCnfg">
                            Create New Configuration
                        </NavText>
                    </NavItem>
                    {workSpaces}
                    <NavItem eventKey="reports">
                        <NavIcon>
                            <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                        </NavIcon>
                        <NavText style={{ paddingRight: 32 }} title="Reports">
                            Reports
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="settings">
                        <NavIcon>
                            <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.5em', verticalAlign: 'middle' }} />
                        </NavIcon>
                        <NavText style={{ paddingRight: 32 }} title="Settings">
                            Settings
                        </NavText>
                        <NavItem eventKey="settings/policies">
                            <NavText title="Policies">
                                Policies
                         </NavText>
                        </NavItem>
                        <NavItem eventKey="settings/network">
                            <NavText title="Network">
                                Network
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        CreateNewWorkspace: () => dispatch({
            type: CREATE_WORKSPACE
        })
    }
}

const mapStateToProps = (state, ownProps) => {
    let newState = { ...ownProps };
    newState.workSpaces = state.cnfgReducer.workSpaces.slice()
    newState.maxWorkSpaceID = state.cnfgReducer.maxWorkSpaceID
    return newState;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));