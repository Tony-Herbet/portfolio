// === action types
export const UPDATE_FORM = 'UPDATE_FORM';
export const SEND_EMAIL = 'SEND_EMAIL';

// === action creators
export const updateForm = (name, newValue) => ({
  type: UPDATE_FORM,
  name,
  newValue,
});

export const sendEmail = () => ({
  type: SEND_EMAIL,
});
