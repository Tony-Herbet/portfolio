import React from 'react';
import PropTypes from 'prop-types';

import MailStyled from './MailStyled';
import FrameHeader from 'containers/FrameHeader';

const Mail = ({
  mail,
}) => (
  <MailStyled className="frame-container" mail={mail}>
    <FrameHeader identifier="mail" name="Mail" />
    <div className="frame-inside" />
  </MailStyled>
);

Mail.propTypes = {
  mail: PropTypes.object.isRequired,
};

export default Mail;
