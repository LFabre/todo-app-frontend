import { dispatchFetchDelete, dispatchFetchGet, dispatchFetchPost, dispatchFetchPut } from "./ActionsUtils"
import {
  GET_PROJECT_TASKS_BEGIN, GET_PROJECT_TASKS_SUCCESS, GET_PROJECT_TASKS_FAILURE,
  POST_TASK_BEGIN, POST_TASK_SUCCESS, POST_TASK_FAILURE,
  PUT_TASK_BEGIN, PUT_TASK_SUCCESS, PUT_TASK_FAILURE,
  DELETE_TASK_BEGIN, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE,
  PUT_FINISH_TASK_BEGIN, PUT_FINISH_TASK_SUCCESS, PUT_FINISH_TASK_FAILURE
} from '../constants/ActionTypes'
import { URLS } from "../constants"

// Get Project Tasks
const acGetProjectWithTasksBegin = () => ({ type: GET_PROJECT_TASKS_BEGIN })
const acGetProjectWithTasksSuccess = tasks => ({
  type: GET_PROJECT_TASKS_SUCCESS,
  payload: tasks
})
const acGetProjectWithTasksFailure = err => ({
  type: GET_PROJECT_TASKS_FAILURE,
  payload: err
})

export const acGetProjectWithTasks = projectId => {
  return dispatchFetchGet(
    `${URLS.PROJECTS}/${projectId}?includeTasks=true`,
    acGetProjectWithTasksBegin,
    acGetProjectWithTasksSuccess,
    acGetProjectWithTasksFailure
  )
}

// Post Task
const acPostTaskBegin = () => ({ type: POST_TASK_BEGIN })
const acPostTaskSuccess = payload => ({
  type: POST_TASK_SUCCESS,
  payload
})
const acPostTaskFailure = err => ({
  type: POST_TASK_FAILURE,
  payload: err
})

export const acPostTask = (projectId, newTask) => {
  // Empty string not allowed
  let tdat = newTask.termination_date ? newTask.termination_date : null

  return dispatchFetchPost(
    `${URLS.PROJECTS}/${projectId}/task`,
    {
      name: newTask.name,
      description: newTask.description,
      termination_date: tdat,
    },
    acPostTaskBegin,
    acPostTaskSuccess,
    acPostTaskFailure,
  )
}

// Put Task
const acPutTaskBegin = () => ({ type: PUT_TASK_BEGIN })
const acPutTaskSuccess = editedProduct => ({
  type: PUT_TASK_SUCCESS,
  payload: editedProduct
})
const acPutTaskFailure = err => ({
  type: PUT_TASK_FAILURE,
  payload: err
})

export const acPutTask = (taskId, editedTask) => {
  // Empty string not allowed
  let tdat = editedTask.termination_date ? editedTask.termination_date : null

  return dispatchFetchPut(
    `${URLS.TASKS}/${taskId}`,
    {
      name: editedTask.name,
      description: editedTask.description,
      termination_date: tdat
    },
    acPutTaskBegin,
    () => acPutTaskSuccess(editedTask),
    acPutTaskFailure,
  )
}

// Delete Task
const acDeleteTaskBegin = () => ({ type: DELETE_TASK_BEGIN })
const acDeleteTaskSuccess = taskId => ({
  type: DELETE_TASK_SUCCESS,
  payload: taskId
})
const acDeleteTaskFailure = err => ({
  type: DELETE_TASK_FAILURE,
  payload: err
})

export const acDeleteTask = taskId => {
  return dispatchFetchDelete(
    `${URLS.TASKS}/${taskId}`,
    acDeleteTaskBegin,
    () => acDeleteTaskSuccess(taskId),
    acDeleteTaskFailure,
  )
}

// Finish Task
const acPutFinishTaskBegin = () => ({ type: PUT_FINISH_TASK_BEGIN })
const acPutFinishTaskSuccess = task => ({
  type: PUT_FINISH_TASK_SUCCESS,
  payload: task
})
const acPutFinishTaskFailure = err => ({
  type: PUT_FINISH_TASK_FAILURE,
  payload: err
})

export const acPutFinishTask = task => {
  return dispatchFetchPut(
    `${URLS.TASKS}/${task.task_id}/set/finished`,
    {},
    acPutFinishTaskBegin,
    () => acPutFinishTaskSuccess(task),
    acPutFinishTaskFailure,
  )
}