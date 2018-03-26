import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from '../reducers/index.js'

const devMode = process.env.NODE_ENV !== 'production';

const configureStore = preloadedState => {
  const loggerMiddleware = createLogger({
    collapsed: true
  });

  const middleware = [
    apiMiddleware,
    ...(devMode? [ loggerMiddleware ] : [])
  ];

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  )
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
