import { combineReducers } from 'redux';
import utilsReducer from './utils';
import terminalReducer from './terminal';
import txtReaderReducer from './txtReader';
import mailReducer from './mail';
import themeReducer from './theme';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  utils: utilsReducer,
  terminal: terminalReducer,
  txtReader: txtReaderReducer,
  mail: mailReducer,
  theme: themeReducer,
  settings: settingsReducer,
});

export default rootReducer;
