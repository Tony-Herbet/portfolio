import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // secondMiddleware,
  ),
);

const store = createStore(
  rootReducer,
  // secondReducer,
  enhancers,
);

export default store;
