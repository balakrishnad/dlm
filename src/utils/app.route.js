// routes.js
import React, { Suspense, lazy, useState } from 'react'
import {
  Switch, Route, HashRouter as Router,
} from 'react-router-dom'
import { ErrorBoundary } from './ErrorBoundary'
import { LoadingIndicator, Header } from '../Components/index'
import PrivateRoute from './PrivateRoute'

const Login = lazy(() => import(/* webpackChunkName: "Login" */ '../containers/Login/Login'))
const Home = lazy(() => import(/* webpackChunkName: "Home" */ '../containers/Home/Home'))

const LoadingMessage = () => <LoadingIndicator show />

function AppRoute() {
  const [isAuthenticated, setAuthenticated] = useState(true)

  return (
    <div data-test="appComponent">
      <ErrorBoundary>
        <Router history={history}>
          <Header />
          <Suspense fallback={<LoadingMessage />}>
            <Switch>
              <PrivateRoute path="/home" component={Home} isAuthenticated={isAuthenticated} />
              <Route path="/" component={Login} />
            </Switch>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </div>
  )
}

export default AppRoute
