import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import { API_URL } from 'Constants/API'

//CSS BASE, SETEO DE MARGENES Y BODY
import './index.scss'

axios.defaults.baseURL= API_URL;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

