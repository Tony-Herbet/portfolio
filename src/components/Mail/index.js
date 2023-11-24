import React from 'react';
import PropTypes from 'prop-types';

import MailStyled from './MailStyled';
import FrameHeader from 'containers/FrameHeader';

const Mail = ({
  mail,
  form,
  updateForm,
  sendEmail,
}) => {
  const handleChange = (event) => {
    const { value, name } = event.target;
    updateForm(name, value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO add validation
    console.log('sub')
    sendEmail()
  }

  return (
    <MailStyled className="frame-container" mail={mail}>
      <FrameHeader identifier="mail" name="Mail" />
      <div className="frame-inside" >
        <form onSubmit={handleSubmit} id="form">
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} />
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          <label>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} />
          <input type="submit" value="Send" />
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
};

export default Mail;
