import {
  OPEN_TXT_FROM_TERMINAL,
} from '../actions/terminal';

const initialState = {
  filesOpen: [],
};

const txtReader = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_TXT_FROM_TERMINAL:
      return {
        ...state,
        filesOpen: [
          ...state.filesOpen,
          action.value,
        ],
      };
    default: return state;
  }
};
export default txtReader;
