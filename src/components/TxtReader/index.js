import React from 'react';
import PropTypes from 'prop-types';

import TxtReaderStyled from './TxtReaderStyled';
import FrameHeader from '../../containers/FrameHeader';

const Folder = ({
  txtReader,
  text,
}) => (
  <TxtReaderStyled className="frame-container" txtReader={txtReader}>
    <FrameHeader identifier="txtReader" name="TxtReader--" />
    <div className="frame-inside">
      <div className="txtReader-header">
        <span className="menu-options">File</span>
        <span className="menu-options">Edit</span>
        <span className="menu-options">View</span>
        <span className="menu-options">Settings</span>
      </div>
      <div className="txtReader-content">
        {text}
        {/* TODO textarea ? */}
        {/* <textarea className="textarea" /> */}
      </div>
    </div>
  </TxtReaderStyled>
);

Folder.propTypes = {
  txtReader: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default Folder;
