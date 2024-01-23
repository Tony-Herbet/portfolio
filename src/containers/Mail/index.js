import { connect } from 'react-redux';

import Mail from 'components/Mail';

import { updateForm, sendEmail, updateError, updateSuccess } from '../../actions/mail';

import { focusOn } from 'actions/utils'

// === mapStateToProps
const mapStateToProps = (state) => ({
  mail: state.utils.mail,
  form: state.mail.form,
  error: state.mail.error,
  success: state.mail.success,
  language: state.utils.language,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  updateForm: (identifier, newValue) => {
    dispatch(updateForm(identifier, newValue));
  },
  sendEmail: () => {
    dispatch(sendEmail())
  },
  updateError: (newError) => {
    dispatch(updateError(newError));
  },
  updateSuccess: (newSuccess) => {
    dispatch(updateSuccess(newSuccess));
  },
  focusOn: (identifier) => {
    dispatch(focusOn(identifier));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Mail);
