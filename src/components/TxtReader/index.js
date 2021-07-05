import React from 'react';
import PropTypes from 'prop-types';
import { X } from 'react-feather';

import TxtReaderStyled from './TxtReaderStyled';
import FrameHeader from '../../containers/FrameHeader';

const Folder = ({
  txtReader,
  filesOpen,
  closeFileTab,
  tabFocused,
  focusFileTab,
}) => {
  const handleTabFocus = (fileName) => {
    focusFileTab(fileName);
  };
  const handleTabClosing = (i) => {
    const newFilesOpen = [];
    filesOpen.forEach((file, index) => {
      if (index !== i) {
        newFilesOpen.push(file);
      }
    });
    closeFileTab(newFilesOpen);
  };
  return (
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
          {filesOpen.map((file, i) => (
            <div className={file.name === tabFocused ? 'txtReader-tab txtReader-tab_focused' : 'txtReader-tab'} key={file.name} onClick={() => handleTabFocus(file.name)}>
              {file.name}
              <div className="tab-icon-container">
                <X className="tab-icon" onClick={() => handleTabClosing(i)} />
              </div>
            </div>
          ))}
        </div>
        {filesOpen.map((file) => (file.name === tabFocused
        // Only show focused file text
          ? (
            <div className="txtReader-content" key={file.name}>
              {file.text}
            </div>
          ) : ''
        ))}
      </div>
    </TxtReaderStyled>
  );
};

Folder.propTypes = {
  txtReader: PropTypes.object.isRequired,
  filesOpen: PropTypes.array.isRequired,
  closeFileTab: PropTypes.func.isRequired,
  tabFocused: PropTypes.string.isRequired,
  focusFileTab: PropTypes.func.isRequired,
};

export default Folder;
