import React from 'react';
import PropTypes from 'prop-types';

import FolderStyled from './FolderStyled';
import FrameHeader from 'containers/FrameHeader';

const Folder = ({
  folder,
}) => (
  <FolderStyled className="frame-container" folder={folder}>
    <FrameHeader identifier="folder" name="Folder" />
    <div className="frame-inside" />
  </FolderStyled>
);

Folder.propTypes = {
  folder: PropTypes.object.isRequired,
};

export default Folder;
