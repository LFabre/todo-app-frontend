import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'
//import { useTranslation } from 'react-i18next'
import { PrimaryButton } from './../defaults'

function ProjectCard({ project, onEdit, onDelete, onManage }) {
  //const { t } = useTranslation()

  return (
    <Card>
      <h5>{project.name}</h5  >
      <p>{project.description}</p>
      <div className='justify-around'>
        <PrimaryButton onClick={() => onEdit(project)}>
          Edit
        </PrimaryButton>
        <PrimaryButton onClick={() => onManage(project)}>
          Manage
        </PrimaryButton>
        <PrimaryButton onClick={() => onDelete(project)}>
          Delete
        </PrimaryButton>
      </div>
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onManage: PropTypes.func,
}

ProjectCard.defaultProps = {
  project: {},
  edit: true,
  onEdit: () => true,
  onDelete: () => true,
  onManage: () => true,
}

export default ProjectCard