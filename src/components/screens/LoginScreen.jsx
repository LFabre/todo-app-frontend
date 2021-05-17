import React, { useEffect } from 'react'
import { Redirect } from 'react-router';
import { useTranslation } from 'react-i18next';
import { connect, useDispatch } from 'react-redux';

import { ROUTER } from '../../class/constants';

import { LoginForm } from '../forms';
import { Label } from '../defaults';
import { acPostLogin, acPostReconnect } from '../../class/actions';
import { Card } from '../cards';

function LoginScreen({ isAuth, isLoginIn, loginError, hasLoggedOut }) {
  const { t } = useTranslation(), dispatch = useDispatch()

  useEffect(() => {
    if (hasLoggedOut) { return }

    dispatch(acPostReconnect())
      .catch(err => console.error(err))
  }, [dispatch, hasLoggedOut])

  const login = loginForm => {
    if (isLoginIn) { return }

    dispatch(acPostLogin(loginForm))
      .catch(err => console.error(err))
  }

  const renderLoginError = () => {
    if (!loginError) { return null }

    return (
      <Label error>
        {loginError.message}
      </Label>
    )
  }

  if (isAuth)
    return <Redirect to={{ pathname: ROUTER.MAIN }} />

  return (
    <div className='screen-root'>
      <Card>
        <LoginForm onSubmit={login} />
      </Card>
      {renderLoginError()}
      <br />
      {renderLoginError()}
      <p>{t('screens.login.newUser')}</p>
      <a href={ROUTER.REGISTER}>{t('screens.login.createAccount')}</a>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.ReducerAuth.isAuth,
  isLoginIn: state.ReducerAuth.isLoginIn,
  loginError: state.ReducerAuth.loginError,
  hasLoggedOut: state.ReducerAuth.hasLoggedOut
})

export default connect(mapStateToProps)(LoginScreen)