import React from 'react';
import './AppLogo.scss';
import logo from '../../styles/images/logo-dlexchange1.png';

const AppLogo = ({w, h}) => (
  <div className="dlm-logo">
    <img style={{width: w, height: h}} src={logo} />
  </div>
)

export default AppLogo
