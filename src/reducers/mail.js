import { UPDATE_FORM, UPDATE_ERROR, UPDATE_SUCCESS } from '../actions/mail';

const initialState = {
  form: {
    name: '',
    email: '',
    message: '',
  },
  error: '',
  success: false,
};

const mail = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [action.name]: action.newValue
        }
      };

    case UPDATE_ERROR:
      return {
        ...state,
        error: action.newError
      };

    case UPDATE_SUCCESS:
      return {
        ...state,
        success: action.newSuccess
      };

    default: return state;
  }
};
export default mail;
