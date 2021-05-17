import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { ROUTER } from './../../class/constants'

const ScreenAuth = ({ isAuth, user, children }) => {
  if (isAuth && user)
    return children
    
  return (
    <Redirect to={{ pathname: ROUTER.LOGIN }} />
  )
}

const mapStateToProps = state => ({
  isAuth: state.ReducerAuth.isAuth,
  user: state.ReducerAuth.user,
})

export default connect(mapStateToProps)(ScreenAuth)