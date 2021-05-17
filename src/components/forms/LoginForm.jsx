import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import Form from './Form'
import { SCHEMAS } from './../../class/constants'

function LoginForm({ onSubmit }) {
  const { t } = useTranslation()
  const _t = s => t(`forms.login.${s}`)

  return (
    <Form
      title={_t('title')}
      btnText={_t('btn')}
      schema={SCHEMAS.LOGIN}
      onSubmit={onSubmit}
      initialValues={{
        login: '',
        password: '',
      }}
      fields={[
        { id: 'login', type: 'text', placeholder: _t('login') },
        { id: 'password', type: 'password', placeholder: _t('password') },
      ]}
    />
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
}

LoginForm.defaultProps = {
  onSubmit: () => true
}

export default LoginForm;
