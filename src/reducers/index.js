import { combineReducers } from 'redux';
import utilsReducer from './utils';
import terminalReducer from './terminal';
import txtReaderReducer from './txtReader';

const rootReducer = combineReducers({
  utils: utilsReducer,
  terminal: terminalReducer,
  txtReader: txtReaderReducer,
});

export default rootReducer;
