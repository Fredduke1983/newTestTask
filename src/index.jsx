import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename=".">
      <App />
    </HashRouter>
  </React.StrictMode>
);
