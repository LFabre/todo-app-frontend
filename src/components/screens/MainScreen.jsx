import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { useTranslation } from 'react-i18next';
import { connect, useDispatch } from 'react-redux';

import './../../css/MainScreen.css'
import ScreenAuth from './ScreenAuth';
import { ROUTER } from '../../class/constants';
import { FormProject } from '../forms';
import { Card, ProjectCard } from '../cards'
import { Modal, PrimaryButton } from '../defaults'
import {
  acDeleteProject, acGetProjects, acPostProject, acPutProject
} from '../../class/actions';

function MainScreen({ user, projects }) {
  const { t } = useTranslation(), dispatch = useDispatch()
  const _t = (s, op) => t(`screens.main.${s}`, op)

  const [modal, setModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [manageProject, setManageProject] = useState(null)

  useEffect(() => {
    dispatch(acGetProjects())
      .catch(console.error)
  }, [dispatch])

  const toggleModal = () => {
    if (modal)
      setSelectedProject(null)

    setModal(!modal)
  }

  const onSubmit = newProj => {
    if (selectedProject) {
      dispatch(
        acPutProject(
          selectedProject.project_id,
          { ...selectedProject, ...newProj })
      )
        .then(() => {
          setModal(false)
          setSelectedProject(null)
        })
        .catch(console.error)
    } else {
      dispatch(acPostProject(newProj))
        .then(() => setModal(false))
        .catch(console.error)
    }
  }

  const onProjectEdit = project => {
    toggleModal()
    setSelectedProject(project)
  }

  const onProjectDelete = project => {
    dispatch(acDeleteProject(project.project_id))
      .catch(console.error)
  }

  const onProjectManage = projects => {
    setManageProject(projects)
  }

  if (manageProject) {
    let id = manageProject.project_id
    return (
      <Redirect
        to={{
          pathname: `${ROUTER.PROJECT}/${id}`,
          state: { project: manageProject }
        }}
      />
    )
  }

  return (
    <ScreenAuth>
      <div className='screen-root'>
        <Modal show={modal} onClose={toggleModal}>
          <Card>
            <FormProject
              initialValues={selectedProject}
              onSubmit={onSubmit}
            />
          </Card>
        </Modal>
        <h1>
          {_t('welcome', { firstName: user.first_name, lastName: user.last_name })}
        </h1>
        <PrimaryButton onClick={toggleModal}>
          {_t('btnNewProject')}
        </PrimaryButton>
        {
          projects.map(p => (
            <ProjectCard
              key={p.project_id}
              project={p}
              onEdit={onProjectEdit}
              onManage={onProjectManage}
              onDelete={onProjectDelete}
            />
          ))
        }
      </div>
    </ScreenAuth>
  );
};

const mapStateToProps = state => ({
  user: state.ReducerAuth.user,
  projects: state.ReducerMain.projects,
})

export default connect(mapStateToProps)(MainScreen)
