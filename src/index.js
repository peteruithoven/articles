import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App.js';
import registerServiceWorker from './registerServiceWorker';

import { bindActionCreators } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js'
import * as actions from './actions/index.js'

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ), document.getElementById('root'));

registerServiceWorker();

window.actions = bindActionCreators(actions, store.dispatch);
