import React from 'react';
import PropTypes from 'prop-types';

import MailStyled from './MailStyled';
import FrameHeader from 'containers/FrameHeader';

import { t } from '../../helpers';

const Mail = ({
  mail,
  form,
  updateForm,
  sendEmail,
  error,
  success,
  updateError,
  updateSuccess,
  focusOn,
  language
}) => {
  const handleChange = (event) => {
    const { value, name } = event.target;
    updateForm(name, value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {name, email, message } = form;

    if(email === '' || name === '' || message === '') {
      updateError('All fields must be filled')
      updateSuccess(false)
    } 
    else {
      sendEmail()
      updateError('')
      updateSuccess(true)
      updateForm('name', '')
      updateForm('email', '')
      updateForm('message', '')
      setTimeout(() => {
        updateSuccess(false);
      }, 10000);
    }
  };

  const handleFocus = () => {
    focusOn('mail');
  }

  return (
    <MailStyled className="frame-container" mail={mail} onClick={handleFocus}>
      <FrameHeader identifier="mail" name="Fmail" icon="mail" />
      <div className="frame-inside" >
        <form onSubmit={handleSubmit} id="form">
          <h1>{t('mail_title', language)}</h1>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={t('mail_name', language)} className='name' autoFocus />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={t('mail_email', language)} className='email' autoFocus />
          <textarea name="message" value={form.message} onChange={handleChange} className='message' placeholder={t('mail_message', language)} autoFocus />
          <div className='form-end'>
            <input type="submit" value={t('mail_send_button', language)} className='submit' />
            {error && (
              <div className='error'>
                {error}
              </div>
            )}
            {success && (
              <div className='success'>
                {t('mail_success', language)}
              </div>
            )}
          </div>
        </form>
      </div>
    </MailStyled>
  )
};

Mail.propTypes = {
  mail: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  updateForm: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  updateError: PropTypes.func.isRequired,
  updateSuccess: PropTypes.func.isRequired,
  focusOn: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default Mail;
