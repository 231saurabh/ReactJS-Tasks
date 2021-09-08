
import { combineReducers } from 'redux'

import { bgReducer } from './reducer'

let rootReducer = combineReducers({
    bgStore: bgReducer
})

export { rootReducer }