import { FOCUS_CATEGORY_TAB } from 'actions/settings'

const initialState = {
  categoryfocused : 'colors',
};

const settings = (state = initialState, action = {}) => {
  switch (action.type) {
    case FOCUS_CATEGORY_TAB:
      return {
        ...state,
        categoryfocused : action.id,
      };

    default: return state;
  }
};
export default settings;
