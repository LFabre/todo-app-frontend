import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Redirect, useParams } from 'react-router';
import { connect, useDispatch } from 'react-redux';

import ScreenAuth from './ScreenAuth';
import { FormTask } from '../forms';
import { Card, TaskCard } from '../cards'
import { Modal, PrimaryButton } from '../defaults'
import {
  acPutTask,
  acPostTask,
  acDeleteTask,
  acPutFinishTask,
  acGetProjectWithTasks,
} from '../../class/actions';
import { ROUTER } from '../../class/constants';

function ProjectScreen({ tasks, project }) {
  const { id } = useParams();
  const { t } = useTranslation(), dispatch = useDispatch()
  const _t = (s, op) => t(`screens.project.${s}`, op)

  const [modal, setModal] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState(null)
  const [goBack, setGoBack] = useState(null)

  useEffect(() => {
    dispatch(acGetProjectWithTasks(id))
      .catch(console.error)
  }, [dispatch, id])

  const toggleModal = () => {
    if (modal)
      setTaskToEdit(null)

    setModal(!modal)
  }

  const onSubmit = newTask => {
    if (!taskToEdit) {
      dispatch(acPostTask(project.project_id, newTask))
        .then(() => setModal(false))
        .catch(console.error)
    } else {
      dispatch(
        acPutTask(taskToEdit.task_id, { ...taskToEdit, ...newTask })
      )
        .then(() => {
          setModal(false)
          setTaskToEdit(null)
        })
        .catch(console.error)
    }
  }

  const onTaskEdit = task => {
    toggleModal()
    setTaskToEdit(task)
  }

  const onTaskDelete = task => {
    dispatch(acDeleteTask(task.task_id))
      .catch(console.error)
  }

  const onTaskFinish = task => {
    dispatch(acPutFinishTask(task))
      .catch(console.error)
  }

  if (goBack) {
    return <Redirect to={{ pathname: ROUTER.MAIN }} />
  }

  return (
    <ScreenAuth>
      <div className='screen-root'>
        <Modal show={modal} onClose={toggleModal}>
          <Card>
            <FormTask
              initialValues={taskToEdit}
              onSubmit={onSubmit}
            />
          </Card>
        </Modal>
        <h1>{_t('title', { name: project ? project.name : '' })}</h1>
        <div>
          <PrimaryButton onClick={toggleModal}>
            {_t('btnNewTask')}
          </PrimaryButton>
          <PrimaryButton onClick={() => setGoBack(true)}>
            Go Back
          </PrimaryButton>
        </div>
        {
          tasks.map(t => (
            <TaskCard
              key={t.task_id}
              task={t}
              onEdit={onTaskEdit}
              onDelete={onTaskDelete}
              onFinish={onTaskFinish}
            />
          ))
        }
      </div>
    </ScreenAuth>
  );
};

const mapStateToProps = state => ({
  tasks: state.ReducerProject.tasks,
  project: state.ReducerProject.project
})

export default connect(mapStateToProps)(ProjectScreen)
