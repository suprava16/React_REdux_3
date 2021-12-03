import combineReducer from "./Reducers/MainReducer"

import {createStore} from "redux"

let store=createStore(combineReducer)
export default store