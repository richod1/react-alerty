import React from 'react'
import ReactDOM from 'react-dom/client'
import Alert from './Alerty.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Alert type="info" message="this is info from ghana"/>
  </React.StrictMode>,
)
