import React from 'react';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

it('renders without crashing', () => {
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  const div = document.createElement('div');
  const root = createRoot(div);
  const store = createStore(combineReducers({
    ctr: counterReducer,
    res: resultReducer,
  }));

  act(() => {
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  act(() => {
    root.unmount();
  });
});
