import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './assets/main.css';
import './index.css';
import App from './App';

import store from './store/sagas/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

