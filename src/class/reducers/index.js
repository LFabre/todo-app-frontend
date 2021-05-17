import { combineReducers } from 'redux'

import ReducerAuth from './ReducerAuth'
import ReducerMain from './ReducerMain'
import ReducerProject from './ReducerProject'
import ReducerRegister from './ReducerRegister'

export default combineReducers({
  ReducerAuth,
  ReducerMain,
  ReducerProject,
  ReducerRegister
})
