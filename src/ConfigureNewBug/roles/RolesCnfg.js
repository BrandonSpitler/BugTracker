import React, { Component } from 'react';
import Accordion from '../../UI/accordion/Accordion';
import RoleCnfg from './RoleCnfg';

class RolesCnfg extends Component {
    state = {
        Roles: []
    }

    deleteRow = (index) => {
        const Roles = this.state.Roles.slice();
        Roles[index] = {
            Role: '',
            deleted: true
        }
        this.setState({
            Users: Roles
        })
    }

    addRole = (index) => {
        const Roles = this.state.Roles.slice();
        Roles.push({
            Role: '',
            UsersRoles: []
        })
        this.setState({
            Roles: Roles
        })
    }


    onRoleChange = (index, value) => {
        const Roles = this.state.Roles.slice();
        Roles[index].Role = value
        this.setState({
            Roles: Roles
        })
    }

    ChangesUsersRoles = (index, value) => {
        const Roles = this.state.Roles.slice();
        Roles[index].UsersRoles = value
        this.setState({
            Roles: Roles
        })
    }

    render() {
        return (
            <div>
                <Accordion
                    AccordionPanels={this.state.Roles}
                    AccordionHeaderField='Role'
                    AccordionPanelType={RoleCnfg}
                    onRoleChange={this.onRoleChange}
                    ChangesUsersRoles={this.ChangesUsersRoles}>
                </Accordion>
                <button onClick={this.addRole}>
                    Add Role
                </button>
            </div>
        )
    }
}

export default RolesCnfg;