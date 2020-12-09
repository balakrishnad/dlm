import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Layout, AppLogo } from '../../Components/index'
import './Login.scss'

const Login = () => {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    history.push('/home')
  }

  return (
    <div className="dlm-login-container">
      <Layout width={40} customStyle={{ borderRadius: 15, border: '1px solid grey' }}>
        <div className="dlm-login">
          <div className="dlm-login-logo"><AppLogo w='80%' h='80%'/></div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="dlm-login-button" type="submit">
              Login
            </Button>
          </Form>
          <div className="dlm-login-help">
            <span>
              Forgot your Password?
            </span>
            <span>
              Login Help
            </span>
            <span>
              First Time User?
            </span>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Login
