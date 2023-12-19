// === action types
export const UPDATE_FORM = 'UPDATE_FORM';
export const SEND_EMAIL = 'SEND_EMAIL';
export const UPDATE_ERROR = 'UPDATE_ERROR';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';

// === action creators
export const updateForm = (name, newValue) => ({
  type: UPDATE_FORM,
  name,
  newValue,
});

export const sendEmail = () => ({
  type: SEND_EMAIL,
});

export const updateError = (newError) => ({
  type: UPDATE_ERROR,
  newError
});

export const updateSuccess = (newSuccess) => ({
  type: UPDATE_SUCCESS,
  newSuccess
});


