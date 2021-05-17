import { acPostRegisterUser } from './ActionsRegister'
import { acPostLogin, acPostReconnect, acLogout } from './ActionsAuth'
import {
  acGetProjects, acPostProject, acDeleteProject, acPutProject
} from './ActionsProject'
import {
  acGetProjectWithTasks, acPostTask, acPutTask, acDeleteTask,
  acPutFinishTask
} from './ActionsTask'

export {
  acPostRegisterUser,
  acPostLogin, acPostReconnect, acLogout,
  acGetProjects, acPostProject, acDeleteProject, acPutProject,
  acGetProjectWithTasks, acPostTask, acPutTask, acDeleteTask,
  acPutFinishTask
}