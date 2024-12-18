// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create a root element and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));  // Updated rendering method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
