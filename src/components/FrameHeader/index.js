/* eslint-disable no-useless-concat */
import React from 'react';
import PropTypes from 'prop-types';
import { Square, X, Minus } from 'react-feather';

import FrameHeaderStyled from './FrameHeaderStyled';

const FrameHeader = ({
  focusOn,
  focusOff,
  minimizeOn,
  maximizeClicked,
  runningOff,
  identifier,
  name,
}) => {
  const minimizeApp = () => {
    minimizeOn(identifier);
    focusOff(identifier);
  };
  const maximizeApp = () => {
    console.log('max')
    maximizeClicked(identifier)
  }
  const closeApp = () => {
    focusOff(identifier);
    minimizeOn(identifier);
    runningOff(identifier);
  };
  const focusApp = () => {
    focusOn(identifier);
  };

  return (
    <FrameHeaderStyled className="frameHeader-container">
      <div className="frame-name" onClick={focusApp}>
        { name }
      </div>
      <div className="icons">
        <div className='icon-border'>
          <div className="icon-container" onClick={minimizeApp}>
            <Minus className="icon" />
          </div>
        </div>
        <div className='icon-border'>
          <div className="icon-container" onClick={maximizeApp}>
            <Square className="icon" />
          </div>
        </div>
        <div className='icon-border'>
          <div className="icon-container icon-x" onClick={closeApp}>
            <X className="icon" />
          </div>
        </div>
      </div>
    </FrameHeaderStyled>
  );
};

FrameHeader.propTypes = {
  focusOn: PropTypes.func.isRequired,
  minimizeOn: PropTypes.func.isRequired,
  maximizeClicked: PropTypes.func.isRequired,
  runningOff: PropTypes.func.isRequired,
  focusOff: PropTypes.func.isRequired,
  identifier: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FrameHeader;
