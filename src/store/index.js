import { createStore, compose, applyMiddleware } from 'redux';

import mailMiddleware from '../middlewares/mailMiddleware';
import rootReducer from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    mailMiddleware,
  ),
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
