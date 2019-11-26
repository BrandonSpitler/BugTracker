import React, { Component } from 'react';
import BugType from './BugType';
import BugContainersCnfg from './BugContainers/BugContainersCnfg';
import BugTypesCnfg from './BugTypes/BugTypesCnfg';

class MainCnfgContainer extends Component {
    state = {
        BugContainersCnfg: []
    }
    render() {
        return (

            <div>
                <BugType></BugType>
                <BugContainersCnfg></BugContainersCnfg>
                <BugTypesCnfg></BugTypesCnfg>
            </div>
        )
    }
}
export default MainCnfgContainer