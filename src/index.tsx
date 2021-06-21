import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './assets/scss/main.scss'
import MainApplication from './MainApplication'

ReactDOM.render(
  <React.StrictMode>
    <MainApplication />
  </React.StrictMode>,
  document.getElementById('root')
)