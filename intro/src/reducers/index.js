import addtoBookReducer from "./addtoBookReducer"
import bookClickReducer from "./bookClickReducer"
import {combineReducers} from 'redux'


const allreducers = combineReducers({
    addtoBook: addtoBookReducer,
    bookClick: bookClickReducer,
})

export default allreducers