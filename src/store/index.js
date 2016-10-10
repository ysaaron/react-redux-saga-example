import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import root from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();
const configureStore = () => {
  const store = createStore(
    root,
    compose(
      applyMiddleware(sagaMiddleware, loggerMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  sagaMiddleware.run(rootSaga);
  if(module.hot) {
    module.hot.accept(
      '../reducers',
      () => store.replaceReducer(require('../reducers').default)
    )
  }

  return store;
}

export default configureStore;
