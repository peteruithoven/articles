import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { apiMiddleware } from 'redux-api-middleware';
// import api from '../middleware/api'
import rootReducer from '../reducers/index.js'
// import DevTools from '../containers/DevTools'

console.log('rootReducer: ', rootReducer);

const devMode = process.env.NODE_ENV !== 'production';

const configureStore = preloadedState => {
  const loggerMiddleware = createLogger({
    collapsed: true
  });

  const middleware = [
    apiMiddleware,
    ...(devMode? [ loggerMiddleware ] : [])
  ];
  console.log('rootReducer: ', rootReducer);
  console.log('preloadedState: ', preloadedState);
  
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  )
  // const store = createStore(rootReducer, preloadedState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
