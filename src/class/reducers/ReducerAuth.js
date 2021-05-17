import {
  LOGOUT,
  LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
  RECONNECT_BEGIN, RECONNECT_SUCCESS, RECONNECT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  jwt: null,
  user: {},
  isAuth: false,
  isLoginIn: false,
  loginError: null,
  hasLoggedOut: false,

  reconnectionFailed: false
}

const ReducerAuth = (state = initialState, { type, payload }) => {
  switch (type) {
    //:: Login
    case LOGIN_BEGIN: {
      return { ...state, isLoginIn: true }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoginIn: false,
        isAuth: true,
        reconnectionFailed: false,
        jwt: payload.token,
        user: payload.user,
        loginError: null
      }
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoginIn: false,
        isAuth: false,
        jwt: null,
        loginError: payload
      }
    }

    //:: Logout
    case LOGOUT: {
      document.cookie = "tok=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      return {
        ...state,
        isAuth: false,
        jwt: null,
        user: {},
        hasLoggedOut: true
      }
    }

    //:: Reconnect
    case RECONNECT_BEGIN: {
      return { ...state }
    }
    case RECONNECT_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        reconnectionFailed: false,
        jwt: payload.token,
        user: payload.user,
      }
    }
    case RECONNECT_FAILURE: {
      return { ...state, reconnectionFailed: true }
    }

    default: return state
  }
}

export default ReducerAuth