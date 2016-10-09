import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import configureStore from './store';
import { Main } from './containers';

const store = configureStore();
const entryElement = document.querySelector('#app');
const render = (entryElement, App) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store }>
        <App />
      </Provider>
    </AppContainer>
  , entryElement);
}

render(entryElement, Main);

if(module.hot) {
  module.hot.accept(
    './containers',
    () => render(entryElement, require('./containers').Main)
  )
}
