import { combineReducers } from 'redux';
import utilsReducer from './utils';
import terminalReducer from './terminal';
import txtReaderReducer from './txtReader';
import mailReducer from './mail';

const rootReducer = combineReducers({
  utils: utilsReducer,
  terminal: terminalReducer,
  txtReader: txtReaderReducer,
  mail: mailReducer
});

export default rootReducer;
