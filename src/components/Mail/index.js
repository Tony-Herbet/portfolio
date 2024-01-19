import React from 'react';
import PropTypes from 'prop-types';

import MailStyled from './MailStyled';
import FrameHeader from 'containers/FrameHeader';

const Mail = ({
  mail,
  form,
  updateForm,
  sendEmail,
  error,
  success,
  updateError,
  updateSuccess,
}) => {
  const handleChange = (event) => {
    const { value, name } = event.target;
    updateForm(name, value)
  }

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
  }

  return (
    <MailStyled className="frame-container" mail={mail}>
      <FrameHeader identifier="mail" name="Mail" icon="mail" />
      <div className="frame-inside" >
        <form onSubmit={handleSubmit} id="form">
          <div>Contact me</div>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='Your name' className='name' autoFocus />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder='Your email adress' className='email' autoFocus />
          <textarea name="message" value={form.message} onChange={handleChange} className='message' placeholder='Your message' autoFocus />
          <div className='form-end'>
            <input type="submit" value="Send" className='submit' />
            {error && (
              <div className='error'>
                {error}
              </div>
            )}
            {success && (
              <div className='success'>
                Your email should have been sent successfully
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
};

export default Mail;
