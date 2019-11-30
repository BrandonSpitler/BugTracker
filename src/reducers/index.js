import { combineReducers } from 'redux'
import { ADD_CONTAINER, CHANGE_WORKSPACE_NAME, CHANGE_CONTAINER, DELETE_CONTAINER } from './reducerActions.js'
const cnfgReducer = (state = { workspaceName: {} }, action) => {
    let newState;
    switch (action.type) {
        case ADD_CONTAINER:
            newState = { ...state }
            newState[action.workspaceName].containers.push(action.newContainer)
            return newState

        case CHANGE_WORKSPACE_NAME:
            if (state[action.oldWorkSpaceName] !== undefined) {
                state[action.newWorkspaceName] = { ...state[action.oldWorkSpaceName] }
                state[action.oldWorkSpaceName] = { containers: [] }
            } else {
                state[action.newWorkspaceName] = { containers: [] }
            }
            return state
        case CHANGE_CONTAINER:
            newState = { ...state };
            newState[action.workspaceName].containers[action.index] = { ...action.newContainer };
            return newState;
        case DELETE_CONTAINER:
            newState = { ...state };
            newState[action.workspaceName].containers.splice(action.index, 1);
            return newState
        default:
            return state
    }
}


const rootReducer = combineReducers({
    cnfgReducer
})

export default rootReducer