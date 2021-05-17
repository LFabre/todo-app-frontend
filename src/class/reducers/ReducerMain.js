import {
  GET_PROJECTS_BEGIN, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE,
  POST_PROJECTS_BEGIN, POST_PROJECTS_SUCCESS, POST_PROJECTS_FAILURE,
  DELETE_PROJECTS_BEGIN, DELETE_PROJECTS_SUCCESS, DELETE_PROJECTS_FAILURE,
  PUT_PROJECTS_BEGIN, PUT_PROJECTS_SUCCESS, PUT_PROJECTS_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  projects: [],
  loadingProjects: false,
  errorProjects: null,

  loadingPostProject: false,
  errorPostProject: null,

  loadingDeleteProject: false,
  errorDeleteProject: null,

  loadingPutProject: false,
  errorPutProject: null,
}

const ReducerMain = (state = initialState, { type, payload }) => {
  switch (type) {
    // Get all Projects
    case GET_PROJECTS_BEGIN: {
      return {
        ...state,
        errorProject: null,
        loadingProjects: true,
      }
    }
    case GET_PROJECTS_SUCCESS: {
      return {
        ...state,
        projects: payload,
        loadingProjects: false,
        errorProjects: null,
      }
    }
    case GET_PROJECTS_FAILURE: {
      return {
        ...state,
        projects: [],
        loadingProjects: false,
        errorProjects: payload,
      }
    }

    // Post Project
    case POST_PROJECTS_BEGIN: {
      return {
        ...state,
        loadingPostProject: true,
        errorPostProject: null
      }
    }
    case POST_PROJECTS_SUCCESS: {
      return {
        ...state,
        projects: [...state.projects, payload],
        loadingPostProject: false,
        errorPostProject: null
      }
    }
    case POST_PROJECTS_FAILURE: {
      return {
        ...state,
        loadingPostProject: false,
        errorPostProject: payload
      }
    }

    // Put Project
    case PUT_PROJECTS_BEGIN: {
      return {
        ...state,
        loadingPutProject: true,
        errorPutProject: null
      }
    }
    case PUT_PROJECTS_SUCCESS: {
      let idx = state.projects.findIndex(p => p.project_id === payload.project_id)
      if (idx === -1) { return state }

      state.projects[idx] = payload

      return {
        ...state,
        projects: [...state.projects],
        loadingPutProject: false,
        errorPutProject: null
      }
    }
    case PUT_PROJECTS_FAILURE: {
      return {
        ...state,
        loadingPutProject: false,
        errorPutProject: payload
      }
    }

    // Delete Project
    case DELETE_PROJECTS_BEGIN: {
      return {
        ...state,
        loadingDeleteProject: true,
        errorDeleteProject: null
      }
    }
    case DELETE_PROJECTS_SUCCESS: {
      return {
        ...state,
        projects: state.projects.filter(p => p.project_id !== payload),
        loadingDeleteProject: false,
        errorDeleteProject: null
      }
    }
    case DELETE_PROJECTS_FAILURE: {
      return {
        ...state,
        loadingDeleteProject: false,
        errorDeleteProject: payload
      }
    }

    default: {
      return state
    }
  }
}

export default ReducerMain

