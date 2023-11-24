import { UPDATE_FORM } from '../actions/mail';

const initialState = {
  form: {
    name: 't',
    email: 'e',
    message: 'st'
  },
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

    default: return state;
  }
};
export default mail;
