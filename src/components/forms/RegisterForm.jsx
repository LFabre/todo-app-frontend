import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import Form from './Form'
import { SCHEMAS } from './../../class/constants'

function RegisterForm({ onSubmit }) {
  const { t } = useTranslation()
  const _t = s => t(`forms.register.${s}`)

  return (
    <Form
      title={_t('title')}
      btnText={_t('btn')}
      schema={SCHEMAS.REGISTER}
      onSubmit={onSubmit}
      initialValues={{
        login: '',
        firstName: '',
        lastName: '',
        password: '',
        confPassword: '',
      }}
      fields={[
        { id: 'login', type: 'text', placeholder: _t('login') },
        { id: 'firstName', type: 'text', placeholder: _t('firstName') },
        { id: 'lastName', type: 'text', placeholder: _t('lastName') },
        { id: 'password', type: 'password', placeholder: _t('password') },
        { id: 'confPassword', type: 'password', placeholder: _t('confPassword') },
      ]}
    />
  )
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
}

RegisterForm.defaultProps = {
  onSubmit: () => true
}

export default RegisterForm;
