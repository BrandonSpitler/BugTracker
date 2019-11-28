import React, { Component } from 'react';
import SubContainers from './SubContainers';
import Select from '../../classes/UI/Select';
import { connect } from 'react-redux'

//todo add validation rules
// make cug containers arent looped
//make sure bug containers arent duplicated

const BugContainerToBugContainerCnfg = (props) => {

    const ContainerWasModified = (state) => {
        if (props.index === undefined) {
            props.modifiedContainer(state);
        } else {
            props.modifiedContainer(props.index, state);
        }
    };

    const AddSubContainer = () => {
        let subBugContainers = props.subBugContainers.slice();
        subBugContainers.push({ containerName: '', subBugContainers: [] });
        ContainerWasModified({ containerName: props.containerName, subBugContainers: subBugContainers });
    }

    const ModifySubContainer = (index, container) => {
        let subBugContainers = props.subBugContainers.slice();
        subBugContainers[index] = container
        ContainerWasModified({ containerName: props.containerName, subBugContainers: subBugContainers });
    }

    const DeleteSubContainer = index => {
        let subBugContainers = props.subBugContainers.slice();
        subBugContainers.splice(index, 1)
        ContainerWasModified({ containerName: props.containerName, subBugContainers: subBugContainers });
    };

    const setContainerName = newContainerName => {
        ContainerWasModified({ containerName: newContainerName, subBugContainers: props.subBugContainers });
    }


    let bugContainersNames = Object.keys(props.bugContainers).map(i => (props.bugContainers[i].containerName));
    return (
        <div>
            <Select value={props.containerName} selectItemArray={bugContainersNames} changeHandler={setContainerName}></Select>
            <SubContainers deleteContainer={DeleteSubContainer}
                workspaceName={props.workspaceName}
                subBugContainers={props.subBugContainers}
                modifyContainer={ModifySubContainer}>
            </SubContainers>
            <button onClick={AddSubContainer}>Add container</button>
            {props.deleteContainer == undefined ?
                null :
                <button className="btn btn-danger"
                    onClick={() => props.deleteContainer(props.index)}>
                    Delete Bug Flow
                </button>
            }
        </div>
    )
}

const mapPropsToState = (state, ownProps) => {
    return {
        bugContainers: state.cnfgReducer[ownProps.workspaceName].containers.slice()
    }

}

export default connect(mapPropsToState)(BugContainerToBugContainerCnfg)