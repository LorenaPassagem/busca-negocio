import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reset from './styles/generic/Reset';
import Base from './styles/elements/Base';
import Gap from './styles/setting/Gap';

ReactDOM.render(
  <React.StrictMode>
    <Gap />
    <Reset />
    <Base />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
