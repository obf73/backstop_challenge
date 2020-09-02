import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import MainView from './views';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk))

const App = () => (
  <Provider store={store}>
    <MainView />
  </Provider>
) 

export default App;
