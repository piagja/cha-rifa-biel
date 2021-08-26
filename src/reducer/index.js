import { combineReducers } from 'redux'
import numberReducer from '../reducer/numberReducer.reducer'

const rootReducer = combineReducers({ numberReducer })

export default rootReducer
