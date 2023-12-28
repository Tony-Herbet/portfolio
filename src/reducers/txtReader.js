import {
  OPEN_TXT_WITH_FILE,
} from 'actions/utils';

import {
  CLOSE_FILE_TAB,
  FOCUS_FILE_TAB,
} from 'actions/txtReader';

const initialState = {
  filesOpen: [],
  tabFocused: '',
};

const txtReader = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_TXT_WITH_FILE:
      return {
        ...state,
        filesOpen: [
          ...state.filesOpen,
          action.value,
        ],
      };

    case CLOSE_FILE_TAB:
      return {
        ...state,
        filesOpen: [
          ...action.newFiles,
        ],
      };

    case FOCUS_FILE_TAB:
      return {
        ...state,
        tabFocused: action.name,
      };

    default: return state;
  }
};
export default txtReader;
