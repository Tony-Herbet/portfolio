import { combineReducers } from 'redux';
import utilsReducer from './utils';
import terminalReducer from './terminal';
import txtReaderReducer from './txtReader';
import mailReducer from './mail';
import themeReducer from './theme';
import settingsReducer from './settings';
import dataReducer from './data';
import folderReducer from './folder'

const rootReducer = combineReducers({
  utils: utilsReducer,
  terminal: terminalReducer,
  txtReader: txtReaderReducer,
  mail: mailReducer,
  theme: themeReducer,
  settings: settingsReducer,
  data: dataReducer,
  folder: folderReducer,
});

export default rootReducer;
