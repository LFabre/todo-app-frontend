import {
  POST_REGISTER_USER_BEGIN, POST_REGISTER_USER_SUCCESS, POST_REGISTER_USER_FAILURE
} from './../constants/ActionTypes'

const initialState = {
  loadingUserRegister: false,
  errorUserRegister: null,
}

const ReducerRegister = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_REGISTER_USER_BEGIN: {
      return {
        ...state,
        errorUserRegister: null,
        loadingUserRegister: true,
      }
    }
    case POST_REGISTER_USER_SUCCESS: {
      return {
        ...state,
        loadingUserRegister: false,
        errorUserRegister: null,
      }
    }
    case POST_REGISTER_USER_FAILURE: {
      return {
        ...state,
        loadingUserRegister: false,
        errorUserRegister: payload,
      }
    }

    default: {
      return state
    }
  }
}

export default ReducerRegister
