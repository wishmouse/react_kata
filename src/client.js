'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
// import App from './components/app'
import ApiHunter from './components/apiHunter'
import domready from 'domready'

domready(() => {
  ReactDOM.render(
    <ApiHunter />,
    document.querySelector('#app')
  )
})




