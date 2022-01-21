import {combineReducers} from 'redux'
import userReducer from './user/userReducer'
import workReducer from './WorkDate/workDateReducer'

const rootReducer = combineReducers({
    user: userReducer,
    work: workReducer
})
export default rootReducer