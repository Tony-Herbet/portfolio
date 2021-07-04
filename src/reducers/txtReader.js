import {
  OPEN_TXT_FROM_TERMINAL,
} from '../actions/terminal';

import {
  CLOSE_FILE_TAB,
} from '../actions/txtReader';

const initialState = {
  filesOpen: [
    {
      name: 'Opquast.txt',
      type: 'file',
      text: 'Certification Opquast Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!',
    },
    {
      name: 'DWWM.txt',
      type: 'file',
      text: 'Titre pro DWWM ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!',
    },
  ],
  tabFocus: '',
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

    case CLOSE_FILE_TAB:
      return {
        ...state,
        filesOpen: [
          ...action.newFiles,
        ],
      };

    default: return state;
  }
};
export default txtReader;
