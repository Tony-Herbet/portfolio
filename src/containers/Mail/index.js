import { connect } from 'react-redux';

import Mail from 'components/Mail';

import { updateForm, sendEmail } from '../../actions/mail'

// === mapStateToProps
const mapStateToProps = (state) => ({
  mail: state.utils.mail,
  form: state.mail.form
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  updateForm: (identifier, newValue) => {
    dispatch(updateForm(identifier, newValue));
  },

  sendEmail: () => {
    dispatch(sendEmail())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Mail);
