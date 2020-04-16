import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './styles.scss';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer }  from './reducers/reducer';
import logger from 'redux-logger';



const store = createStore(reducer, applyMiddleware(thunk, logger));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

