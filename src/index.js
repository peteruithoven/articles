import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css';
import App from './components/App/App.js';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js'

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ), document.getElementById('root'));
