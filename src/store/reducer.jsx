import { combineReducers } from 'redux'
import headerReducer from '../common/header/store/reducer'

const reducer = combineReducers({
  hader: headerReducer
})

export default reducer