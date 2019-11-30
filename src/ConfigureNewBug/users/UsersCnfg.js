
import React, { Component } from 'react';
import UserCnfg from './UserCnfg';
import { defaultContainer } from '../../UI/table/defaultProps';
import Table from '../../UI/table/Table';


class UsersCnfg extends Component {
    state = {
        Users: []
    }


    columns = [
        {
            columnName: 'User',
            field: 'user'
        },
        {
            columnName: 'Email',
            field: 'email'
        }
    ]

    data = [
        {
            user: 'Brandon',
            email: 'brandonfspitler@gmail.com'
        },
        {
            user: 'Joe',
            email: 'Joe@gmail.com'
        },
        {
            user: 'Phil',
            email: 'Phil@gmail.com'
        }
    ]

    changeUser = (index, newUser) => {
        const newUsers = this.state.Users.slice();
        newUsers[index] = newUser;
        this.setState({
            Users: newUsers
        })
    }

    addUser = () => {
        const newUsers = this.state.Users.slice();
        newUsers.push({
            name: '',
            email: ''
        })
        this.setState({
            Users: newUsers
        })
    }

    render() {
        let Users = this.state.Users.map(
            (value, index) => {
                return (
                    <UserCnfg index={index}
                        user={value}
                        changeUser={this.changeUser}
                    >
                    </UserCnfg>
                )
            })
        return (

            <Table Component={{ ...defaultContainer }} columns={this.columns.slice()} tableData={this.data.slice()}>

            </Table>
            // <table className="table table-hover">
            //     <thead>
            //         <tr>
            //             <th>
            //                 Name
            //             </th>
            //             <th>
            //                 email
            //             </th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         {Users}
            //         <tr>
            //             <td colSpan='2'>
            //                 <button onClick={this.addUser}>
            //                     Add User
            //                 </button>
            //             </td>
            //         </tr>
            //     </tbody>
            // </table >
        )

    }
}

export default UsersCnfg