import React from 'react';
import PropTypes from 'prop-types';

import TerminalStyled from './TerminalStyled';
import FrameHeader from '../../containers/FrameHeader';

const Terminal = ({
  terminal,
}) => (
  <TerminalStyled className="frame-container" terminal={terminal}>
    <FrameHeader identifier="terminal" name="Terminal" />
  </TerminalStyled>
);

Terminal.propTypes = {
  terminal: PropTypes.object.isRequired,
};

export default Terminal;
