import { FOLDER_ELEMENT_FOCUSED, UPDATE_FOLDER_OPENED_DATA } from 'actions/folder'

const initialState = {
  elementFocused: '',
  folderOpenedData: []
};

const folder = (state = initialState, action = {}) => {
  switch (action.type) {
    case FOLDER_ELEMENT_FOCUSED:
      return {
        ...state,
        elementFocused: action.name,
      };

    case UPDATE_FOLDER_OPENED_DATA:
      return {
        ...state,
        folderOpenedData: action.data,
      };
  

    default: return state;
  }
};
export default folder;
