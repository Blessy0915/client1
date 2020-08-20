import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import employeeReducer from '../reducers/Employee'
import projectReducer from '../reducers/Project'
import logReducer from '../reducers/Log' 

const configureStore = () =>
{
    const store = createStore(combineReducers({
        projects : projectReducer,
        employees : employeeReducer,
        logs : logReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore