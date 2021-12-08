import combineReducer from "./Reducers/MainReducer"

import {createStore,applyMiddleware} from "redux"
import thunk from 'redux-thunk'

let store=createStore(combineReducer,applyMiddleware(thunk))

export default store