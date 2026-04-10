import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, combineReducers } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

const store = createStore(rootReducer);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

registerServiceWorker();
