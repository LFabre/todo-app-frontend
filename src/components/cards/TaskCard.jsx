import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'
import { useTranslation } from 'react-i18next'
import { PrimaryButton } from './../defaults'
import { isOlder } from '../../class/utils'

function TaskCard({ task, onEdit, onDelete, onFinish }) {
  const { t } = useTranslation()
  const _t = (s, op) => t(`cards.task.${s}`, op)

  const isTaskFinished = () => {
    return task && task.finish_date
  }

  const isTaskOverdue = () => {
    if (!task || !task.finish_date || !task.termination_date)
      return null

    return isOlder(task.termination_date, task.finish_date)
  }

  const getTextStyle = () => {
    return {
      textDecoration: isTaskFinished() ? 'line-through' : 'unset'
    }
  }

  const getBackgroundStyle = () => {
    if (!task || !task.finish_date)
      return null

    return {
      background: isTaskOverdue() ? '#f5c4c3' : '#c9efc9'
    }
  }

  const renderTermination = () => {
    if (!task || !task.termination_date)
      return null

    return (
      <p style={getTextStyle()}>
        {_t('termination', { date: task.termination_date })}
      </p>
    )
  }

  const renderButtons = () => {
    if (isTaskFinished())
      return null

    return (
      <div className='justify-around'>
        <PrimaryButton onClick={() => onEdit(task)}>
          {_t('btnEdit')}
        </PrimaryButton>
        <PrimaryButton onClick={() => onDelete(task)}>
          {_t('btnDelete')}
        </PrimaryButton>
        <PrimaryButton onClick={() => onFinish(task)}>
          {_t('btnFinish')}
        </PrimaryButton>
      </div>
    )
  }

  return (
    <Card style={getBackgroundStyle()}>
      <div className='task-card-header'>
        <h5 style={getTextStyle()}>{task.name}</h5>
        {
          !isTaskFinished() ? null : (
            <p><b>Finished At: {task.finish_date}</b></p>
          )
        }
      </div>
      {renderTermination()}
      <p style={getTextStyle()}>{task.description}</p>
      {renderButtons()}
    </Card>
  )
}

TaskCard.propTypes = {
  Task: PropTypes.object,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onFinish: PropTypes.func,
}

TaskCard.defaultProps = {
  task: {},
  edit: true,
  onEdit: () => true,
  onDelete: () => true,
  onFinish: () => true
}

export default TaskCard