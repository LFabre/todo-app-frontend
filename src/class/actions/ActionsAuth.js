import { URLS } from '../constants'
import { dispatchFetchPost } from './ActionsUtils'
import {
  LOGOUT,
  LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
  RECONNECT_BEGIN, RECONNECT_SUCCESS, RECONNECT_FAILURE,
} from '../constants/ActionTypes'

//:: Login
const acPostLoginBegin = () => ({ type: LOGIN_BEGIN })
const acPostLoginSuccess = user => ({ type: LOGIN_SUCCESS, payload: user })
const acPostLoginFailure = err => ({ type: LOGIN_FAILURE, payload: err })

export const acPostLogin = ({ login, password }) => {
  return dispatchFetchPost(
    URLS.LOGIN,
    { login, password },
    acPostLoginBegin,
    acPostLoginSuccess,
    acPostLoginFailure
  )
}

//:: Logout
export const acLogout = () => ({ type: LOGOUT })

//:: Reconnect
const acPostReconnectBegin = () => ({ type: RECONNECT_BEGIN })
const acPostReconnectSuccess = data => ({ type: RECONNECT_SUCCESS, payload: data })
const acPostReconnectFailure = err => ({ type: RECONNECT_FAILURE, payload: err })

export const acPostReconnect = () => {
  return dispatchFetchPost(
    URLS.RECONNECT,
    {},
    acPostReconnectBegin,
    acPostReconnectSuccess,
    acPostReconnectFailure
  )
}