import { dispatchFetchDelete, dispatchFetchGet, dispatchFetchPost, dispatchFetchPut } from './ActionsUtils'
import {
  GET_PROJECTS_BEGIN, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE,
  POST_PROJECTS_BEGIN, POST_PROJECTS_SUCCESS, POST_PROJECTS_FAILURE,
  PUT_PROJECTS_BEGIN, PUT_PROJECTS_SUCCESS, PUT_PROJECTS_FAILURE,
  DELETE_PROJECTS_BEGIN, DELETE_PROJECTS_SUCCESS, DELETE_PROJECTS_FAILURE
} from '../constants/ActionTypes'
import { URLS } from '../constants'

// Get all User Projects
const acGetProjectsBegin = () => ({ type: GET_PROJECTS_BEGIN })
const acGetProjectsSuccess = payload => ({
  type: GET_PROJECTS_SUCCESS,
  payload
})
const acGetProjectsFailure = err => ({
  type: GET_PROJECTS_FAILURE,
  payload: err
})

export const acGetProjects = () => {
  return dispatchFetchGet(
    URLS.PROJECTS,
    acGetProjectsBegin,
    acGetProjectsSuccess,
    acGetProjectsFailure,
  )
}

// Post Project
const acPostProjectBegin = () => ({ type: POST_PROJECTS_BEGIN })
const acPostProjectSuccess = payload => ({
  type: POST_PROJECTS_SUCCESS,
  payload
})
const acPostProjectFailure = err => ({
  type: POST_PROJECTS_FAILURE,
  payload: err
})

export const acPostProject = ({ name, description }) => {
  return dispatchFetchPost(
    URLS.PROJECTS,
    { name, description },
    acPostProjectBegin,
    acPostProjectSuccess,
    acPostProjectFailure,
  )
}

// Put Project
const acPutProjectBegin = () => ({ type: PUT_PROJECTS_BEGIN })
const acPutProjectSuccess = editedProduct => ({
  type: PUT_PROJECTS_SUCCESS,
  payload: editedProduct
})
const acPutProjectFailure = err => ({
  type: PUT_PROJECTS_FAILURE,
  payload: err
})

export const acPutProject = (projectId, editedProduct) => {
  return dispatchFetchPut(
    `${URLS.PROJECTS}/${projectId}`,
    {
      name: editedProduct.name,
      description: editedProduct.description,
    },
    acPutProjectBegin,
    () => acPutProjectSuccess(editedProduct),
    acPutProjectFailure,
  )
}

// Delete Project
const acDeleteProjectBegin = () => ({ type: DELETE_PROJECTS_BEGIN })
const acDeleteProjectSuccess = projectId => ({
  type: DELETE_PROJECTS_SUCCESS,
  payload: projectId
})
const acDeleteProjectFailure = err => ({
  type: DELETE_PROJECTS_FAILURE,
  payload: err
})

export const acDeleteProject = projectId => {
  return dispatchFetchDelete(
    `${URLS.PROJECTS}/${projectId}`,
    acDeleteProjectBegin,
    () => acDeleteProjectSuccess(projectId),
    acDeleteProjectFailure,
  )
}
