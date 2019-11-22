import React, { Component } from 'react';
import BugType from './BugType';
import BugContainersCnfg from './BugContainers/BugContainersCnfg';

class MainCnfgContainer extends Component {

    render() {
        return (

            <div>
                <BugType></BugType>
                <BugContainersCnfg></BugContainersCnfg>
            </div>
        )
    }
}
export default MainCnfgContainer