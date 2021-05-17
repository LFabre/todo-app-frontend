import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect, useDispatch } from 'react-redux';

import { RegisterForm } from '../forms';
import { acPostRegisterUser } from '../../class/actions';
import { Label } from '../defaults';
import { Redirect } from 'react-router';
import { ROUTER } from '../../class/constants';
import { Card } from '../cards';

function RegisterScreen({ loadingUserRegister, errorUserRegister }) {
  const { t } = useTranslation(), dispatch = useDispatch()

  const [success, setSuccess] = useState(false)

  const handleSubmit = values => {
    if (loadingUserRegister) { return }

    dispatch(acPostRegisterUser(values))
      .then(_ => setSuccess(true))
      .catch(console.error)
  }

  const renderRegisterError = () => {
    if (!errorUserRegister) { return null }

    return (
      <Label error>
        {errorUserRegister.message}
      </Label>
    )
  }

  if (success)
    return <Redirect to={{ pathname: ROUTER.LOGIN }} />

  return (
    <div className='screen-root'>
      <Card>
        <RegisterForm onSubmit={handleSubmit} />
      </Card>
      <br />
      {renderRegisterError()}
      <p>{t('screens.register.account')}</p>
      <a href={ROUTER.LOGIN}>{t('screens.register.login')}</a>
    </div>
  );
};

const mapStateToProps = ({ ReducerRegister }) => ({
  loadingUserRegister: ReducerRegister.loadingUserRegister,
  errorUserRegister: ReducerRegister.errorUserRegister,
})

export default connect(mapStateToProps)(RegisterScreen)