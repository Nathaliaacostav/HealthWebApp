import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Welcome from './pages/Welcome/index.jsx'
import SignUp from './pages/SignUp/index.jsx'
import SignIn from './pages/SignIn/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>,
)

