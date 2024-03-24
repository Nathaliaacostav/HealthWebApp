import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router/AppRoutes.jsx'
import { Provider } from 'react-redux'
import './styles/global.sass'
import SignUp from './pages/SignUp/index.jsx'
import Home from './pages/Home/index.jsx';
import PhotoTaking from './pages/PhotoTaking/index.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PhotoTaking />
  </BrowserRouter>
);