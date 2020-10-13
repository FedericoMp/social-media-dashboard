import React from 'react';
import ReactDOM from 'react-dom';

import './styles/normalize.css';
import './styles/base.css';
import './styles/dark-theme.css';
import './styles/light-theme.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
