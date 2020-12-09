import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/sass/index.scss'
import { LoadingIndicator } from './Components/index'

const LoadableApp = lazy(() => import(/* webpackChunkName: "billPayApp" */ './App'))
const LoadingMessage = () => <LoadingIndicator />

const RenderDom = () => (
  <Suspense fallback={<LoadingMessage />}>
    <LoadableApp />
  </Suspense>
)


ReactDOM.render(<RenderDom />, document.getElementById('root'))
