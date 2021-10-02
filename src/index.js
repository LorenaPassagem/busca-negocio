import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reset from './styles/generic/Reset';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Reset />
  </React.StrictMode>,
  document.getElementById('root'),
);
