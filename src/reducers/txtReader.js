import {
  OPEN_TXT_FROM_TERMINAL,
} from '../actions/terminal';

const initialState = {
  text: '',
};

const txtReader = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_TXT_FROM_TERMINAL:
      return {
        ...state,
        text: action.value,
      };
    default: return state;
  }
};
export default txtReader;
