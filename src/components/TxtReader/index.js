import React from 'react';
import PropTypes from 'prop-types';
import { X } from 'react-feather';

import TxtReaderStyled from './TxtReaderStyled';
import FrameHeader from '../../containers/FrameHeader';

const Folder = ({
  txtReader,
  filesOpen,
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
      <div className="txtReader-tabs">
        {filesOpen.map((file) => (
          <div className="txtReader-tab" key={file.name}>
            {file.name}
            <div className="tab-icon-container">
              <X className="tab-icon" />
            </div>
          </div>
        ))}
      </div>
      <div className="txtReader-content" />
    </div>
  </TxtReaderStyled>
);

// TODO textarea ?
// <textarea className="textarea" />

Folder.propTypes = {
  txtReader: PropTypes.object.isRequired,
  filesOpen: PropTypes.array.isRequired,
};

export default Folder;
