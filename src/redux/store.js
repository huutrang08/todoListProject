import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './root'
const middlewares = [composeWithDevTools()]
const store = createStore(rootReducer,...middlewares)
export default store