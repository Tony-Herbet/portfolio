import { combineReducers } from 'redux';
import utilsReducer from './utils';
import terminalReducer from './terminal';

const rootReducer = combineReducers({
  utils: utilsReducer,
  terminal: terminalReducer,
});

export default rootReducer;
