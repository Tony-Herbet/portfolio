import { combineReducers } from 'redux';
import utilsReducer from './utils';

const rootReducer = combineReducers({
  utils: utilsReducer,
});

export default rootReducer;
