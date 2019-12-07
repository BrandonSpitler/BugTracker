import { combineReducers } from 'redux'
import * as Reducers from './reducerActions.js'
const cnfgReducer = (
    state = {
        workSpaceName: {
            containers: [],
            users: []
        }
    }, action) => {
    let newState;
    switch (action.type) {
        case Reducers.ADD_CONTAINER:
            newState = { ...state }
            newState[action.workspaceName].containers.push(action.newContainer)
            return newState

        case Reducers.CHANGE_WORKSPACE_NAME:
            if (state[action.oldWorkSpaceName] !== undefined) {
                state[action.newWorkspaceName] = { ...state[action.oldWorkSpaceName] }
                state[action.oldWorkSpaceName] = { containers: [] }
            } else {
                state[action.newWorkspaceName] = { containers: [], users: [] }
            }
            return state
        case Reducers.CHANGE_CONTAINER:
            newState = { ...state };
            newState[action.workspaceName].containers[action.index] = { ...action.newContainer };
            return newState;
        case Reducers.DELETE_CONTAINER:
            newState = { ...state };
            newState[action.workspaceName].containers.splice(action.index, 1);
            return newState
        case Reducers.ADD_USER:
            newState = { ...state }
            newState[action.workspaceName].users.push(action.user)
            return newState
        case Reducers.UPDATE_USER:
            newState = { ...state }
            newState[action.workspaceName].users[action.index] = action.user
            return newState
        case Reducers.DELETE_USER:
            newState = { ...state }
            newState[action.workspaceName].users.splice(action.index, 1)
            return newState
        default:
            return state
    }

}


const rootReducer = combineReducers({
    cnfgReducer
})

export default rootReducer;