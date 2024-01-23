import {
  OPEN_TXT_WITH_FILE,
} from 'actions/utils';

import {
  CLOSE_FILE_TAB,
  FOCUS_FILE_TAB,
} from 'actions/txtReader';

const initialState = {
  // Initial filesOpen and tabFocus come from data.js, take the new version if there is a change
  filesOpen: [  
    {
      name: 'Presentation.txt',
      text: 'Présentation Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!'
    }
  ],
  tabFocused: 'Presentation.txt',
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
