import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

function Happy(){
  return(
  <h1>jainnnnnnnnn</h1>
  )
}

const newElement = React.createElement(
  'p',
  {},
  'hello world '
)

createRoot(document.getElementById('root')).render(
 <>
 <App />,
    <Happy />,
    {newElement}
    </>
)
