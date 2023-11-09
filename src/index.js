import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import store from './app/store'
import { Provider } from 'react-redux'

axios.defaults.baseURL="https://swadeshibazaar-backend.onrender.com/api/v1";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);reportWebVitals();