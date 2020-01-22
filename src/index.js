import React from 'react';
import ReactDOM from 'react-dom';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';

import sharks from './models/sharks';
import dolphins from './models/dolphins';
import App from './App';

// generate Redux store
const store = init({
  models: {
    sharks,
    dolphins,
  },
});

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
