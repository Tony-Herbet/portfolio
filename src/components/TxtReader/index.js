import React from 'react';
import PropTypes from 'prop-types';

import TxtReaderStyled from './TxtReaderStyled';
import FrameHeader from '../../containers/FrameHeader';

const Folder = ({
  txtReader,
}) => (
  <TxtReaderStyled className="frame-container" txtReader={txtReader}>
    <FrameHeader identifier="txtReader" name="txtReader--" />
  </TxtReaderStyled>
);

Folder.propTypes = {
  txtReader: PropTypes.object.isRequired,
};

export default Folder;
