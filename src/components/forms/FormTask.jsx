import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import Form from './Form'
import { SCHEMAS } from './../../class/constants'

function FormTask({ onSubmit, initialValues }) {
  const { t } = useTranslation()
  const _t = (s, op) => t(`forms.task.${s}`, op)

  const getTitle = () => {
    if (!initialValues)
      return _t('title')

    return _t('titleEdit', { name: initialValues.name })
  }

  return (
    <Form
      title={getTitle()}
      btnText={_t('btn')}
      schema={SCHEMAS.TASK}
      onSubmit={onSubmit}
      initialValues={{
        name: initialValues ? initialValues.name : '',
        description: initialValues ? initialValues.description : '',
        termination_date: initialValues ? initialValues.termination_date : ''
      }}
      fields={[
        { id: 'name', type: 'text', placeholder: _t('name') },
        { id: 'termination_date', type: 'date', placeholder: _t('name') },
        { id: 'description', type: 'text', placeholder: _t('description') },
      ]}
    />
  )
}

FormTask.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
}

FormTask.defaultProps = {
  onSubmit: () => true,
  initialValues: null
}

export default FormTask;
