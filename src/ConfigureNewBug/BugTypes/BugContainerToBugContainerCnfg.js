import React from 'react';
import SubContainers from './SubContainers';
import Select from '../../UI/Select';
import { connect } from 'react-redux'

//todo add validation rules
// make cug containers arent looped
//make sure bug containers arent duplicated

const BugContainerToBugContainerCnfg = (props) => {

    const GetChangePramas = () => {
        return ({
            containerName: props.containerName,
            subBugContainers: props.subBugContainers,
            subBugRole: props.subBugRole
        })
    }

    const ContainerWasModified = (state) => {
        if (props.index === undefined) {
            props.modifiedContainer(state);
        } else {
            props.modifiedContainer(props.index, state);
        }
    };

    const AddSubContainer = () => {
        let subBugContainers = props.subBugContainers.slice();
        subBugContainers.push({ containerName: '', subBugContainers: [], subBugRole: '' });
        ContainerWasModified({ ...GetChangePramas(), subBugContainers: subBugContainers });
    }

    const ModifySubContainer = (index, container) => {
        let subBugContainers = props.subBugContainers.slice();
        subBugContainers[index] = container
        ContainerWasModified({ ...GetChangePramas(), subBugContainers: subBugContainers });
    }

    const DeleteSubContainer = index => {
        let subBugContainers = props.subBugContainers.slice();
        subBugContainers.splice(index, 1)
        ContainerWasModified({
            ...GetChangePramas(),
            subBugContainers: subBugContainers
        });
    };

    const setContainerName = newContainerName => {
        ContainerWasModified({
            ...GetChangePramas(),
            containerName: newContainerName
        });
    }

    const SelectRoleChangeHangler = newRole => {
        ContainerWasModified({
            ...GetChangePramas(),
            subBugRole: newRole
        })
    }

    return (
        <div>
            <div>
                <label>
                    Container
            </label>
                <Select value={props.containerName}
                    selectItemArray={props.bugContainers}
                    valueName='containerName'
                    decodeName='containerName'
                    changeHandler={setContainerName}>
                </Select>
            </div>
            <div>
                <label>
                    Assign to Role
            </label>
                <Select value={props.subBugRole}
                    selectItemArray={props.BugJobRoles}
                    valueName='bugJobRoles'
                    decodeName='bugJobRoles'
                    changeHandler={SelectRoleChangeHangler}>
                </Select>
            </div>
            <SubContainers deleteContainer={DeleteSubContainer}
                BugJobRoles={props.BugJobRoles}
                workspaceName={props.workspaceName}
                subBugContainers={props.subBugContainers}
                modifyContainer={ModifySubContainer}
                bugContainers={props.bugContainers}>
            </SubContainers>
            <button onClick={AddSubContainer}>Add container</button>
            {props.deleteContainer === undefined ?
                null :
                <button className="btn btn-danger"
                    onClick={() => props.deleteContainer(props.index)}>
                    Delete Bug Flow
                </button>
            }
        </div>
    )
}


export default BugContainerToBugContainerCnfg