import React, { Component } from 'react';
import BugContainerCnfg from './BugContainerCnfg';
import { connect } from 'react-redux'
import { ADD_CONTAINER, CHANGE_CONTAINER, DELETE_CONTAINER } from '../../reducers/reducerActions'
// todo add remove button
// todo add key to bug container names
class BugContainersCnfg extends Component {
    addBugContainerHandler = () => {
        this.props.changeContainer(-1, { containerName: '' })
    };

    setBugContainerName = (index, value) => {
        this.props.changeContainer(index, { containerName: value })
    }

    deleteContainer = (index) => {
        this.props.changeContainer(index, { deleted: true })
    }

    render() {
        let bugContainers = (
            this.props.bugContainers.map((props, index) => {
                if (props.deleted === undefined) {
                    return (
                        <BugContainerCnfg
                            bugContainerName={props.containerName}
                            index={index}
                            deleteBugContainer={this.deleteContainer}
                            setBugContainerName={this.setBugContainerName}>
                        </BugContainerCnfg>)
                }
                return null;
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

export default BugContainersCnfg;