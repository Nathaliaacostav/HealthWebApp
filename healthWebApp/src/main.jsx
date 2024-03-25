import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import './styles/global.sass';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </BrowserRouter>
);