import {
  GET_PROJECT_TASKS_BEGIN, GET_PROJECT_TASKS_SUCCESS, GET_PROJECT_TASKS_FAILURE,
  POST_TASK_BEGIN, POST_TASK_SUCCESS, POST_TASK_FAILURE,
  PUT_TASK_BEGIN, PUT_TASK_SUCCESS, PUT_TASK_FAILURE,
  DELETE_TASK_BEGIN, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE,
  PUT_FINISH_TASK_BEGIN, PUT_FINISH_TASK_SUCCESS, PUT_FINISH_TASK_FAILURE
} from '../constants/ActionTypes'
import { today } from '../utils'

const initialState = {
  tasks: [],
  project: null,
  loadingProject: false,
  errorProject: null,

  loadingPostTask: false,
  errorPostTask: null,

  loadingDeleteTask: false,
  errorDeleteTask: null,

  loadingPutTask: false,
  errorPutTask: null,

  loadingFinishTask: false,
  errorFinishTask: null,
}

const ReducerProject = (state = initialState, { type, payload }) => {
  switch (type) {
    // Get Project with Task Information
    case GET_PROJECT_TASKS_BEGIN: {
      return {
        ...state,
        loadingTasks: true,
        errorTasks: null,
      }
    }
    case GET_PROJECT_TASKS_SUCCESS: {
      const { tasks, ...project } = payload
      return {
        ...state,
        tasks,
        project,
        loadingTasks: false,
        errorTasks: null,
      }
    }
    case GET_PROJECT_TASKS_FAILURE: {
      return {
        ...state,
        loadingTasks: false,
        errorTasks: payload,
      }
    }

    // Post Task
    case POST_TASK_BEGIN: {
      return {
        ...state,
        loadingPostTask: true,
        errorPostTask: null
      }
    }
    case POST_TASK_SUCCESS: {
      return {
        ...state,
        tasks: [...state.tasks, payload],
        loadingPostTask: false,
        errorPostTask: null
      }
    }
    case POST_TASK_FAILURE: {
      return {
        ...state,
        loadingPostTask: false,
        errorPostTask: payload
      }
    }

    // Put Task
    case PUT_TASK_BEGIN: {
      return {
        ...state,
        loadingPutTask: true,
        errorPutTask: null
      }
    }
    case PUT_TASK_SUCCESS: {
      let idx = state.tasks.findIndex(t => t.task_id === payload.task_id)
      if (idx === -1) { return state }

      state.tasks[idx] = payload

      return {
        ...state,
        tasks: [...state.tasks],
        loadingPutTask: false,
        errorPutTask: null
      }
    }
    case PUT_TASK_FAILURE: {
      return {
        ...state,
        loadingPutTask: false,
        errorPutTask: payload
      }
    }

    // Delete Task
    case DELETE_TASK_BEGIN: {
      return {
        ...state,
        loadingDeleteTask: true,
        errorDeleteTask: null
      }
    }
    case DELETE_TASK_SUCCESS: {
      return {
        ...state,
        tasks: state.tasks.filter(t => t.task_id !== payload),
        loadingDeleteTask: false,
        errorDeleteTask: null
      }
    }
    case DELETE_TASK_FAILURE: {
      return {
        ...state,
        loadingDeleteTask: false,
        errorDeleteTask: payload
      }
    }

    // Finish Task
    case PUT_FINISH_TASK_BEGIN: {
      return {
        ...state,
        loadingFinishTask: true,
        errorFinishTask: null,
      }
    }
    case PUT_FINISH_TASK_SUCCESS: {
      let idx = state.tasks.findIndex(t => t.task_id === payload.task_id)
      if (idx === -1) { return state }

      state.tasks[idx].finish_date = today()

      return {
        ...state,
        tasks: [...state.tasks],
        loadingFinishTask: false,
        errorFinishTask: null,
      }
    }
    case PUT_FINISH_TASK_FAILURE: {
      return {
        ...state,
        loadingFinishTask: false,
        errorFinishTask: payload,
      }
    }

    default: {
      return state
    }
  }
}

export default ReducerProject
