import { connect } from 'react-redux';

import Mail from 'components/Mail';

import { updateForm, sendEmail, updateError, updateSuccess } from '../../actions/mail'

// === mapStateToProps
const mapStateToProps = (state) => ({
  mail: state.utils.mail,
  form: state.mail.form,
  error: state.mail.error,
  success: state.mail.success,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Mail);
