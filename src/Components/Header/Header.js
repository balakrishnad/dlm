import React from 'react'
import './Header.scss'
import { useHistory } from 'react-router-dom'
import appLogo from '../../styles/images/pepsico-logo.png'

export default () => {
  const history = useHistory()

  const logout = () => {
    history.push('/')
  }

  return (
    <div className="dlm-header-main">
      <span className="dlm-header-logo">
        <img src={appLogo} alt="Pepsico Logo" />
      </span>
      <span className="dlm-header-logout" onClick={logout}>
        Logout
      </span>
    </div>
  )
}
