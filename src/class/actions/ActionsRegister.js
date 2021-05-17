import { URLS } from '../constants'
import {
  POST_REGISTER_USER_BEGIN, POST_REGISTER_USER_SUCCESS, POST_REGISTER_USER_FAILURE
} from './../constants/ActionTypes'
import { dispatchFetchPost } from './ActionsUtils'

const acPostRegisterUserBegin = () => ({ type: POST_REGISTER_USER_BEGIN })
const acPostRegisterUserSuccess = () => ({ type: POST_REGISTER_USER_SUCCESS })
const acPostRegisterUserFailure = err => ({
  type: POST_REGISTER_USER_FAILURE,
  payload: err
})

export const acPostRegisterUser = values => {
  return dispatchFetchPost(
    URLS.REGISTER_USER,
    {
      login: values.login,
      first_name: values.firstName,
      last_name: values.lastName,
      password: values.password,
    },
    acPostRegisterUserBegin,
    acPostRegisterUserSuccess,
    acPostRegisterUserFailure,
  )
}
