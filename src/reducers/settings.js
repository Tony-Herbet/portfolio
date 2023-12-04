import { FOCUS_CATEGORY_TAB } from 'actions/settings'

const initialState = {
  categoryFocused: 'colors',
};

const settings = (state = initialState, action = {}) => {
  switch (action.type) {
    case FOCUS_CATEGORY_TAB:
      return {
        ...state,
        categoryFocused: action.id,
      };

    default: return state;
  }
};
export default settings;
