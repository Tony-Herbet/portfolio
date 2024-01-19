/* eslint-disable no-useless-concat */
import React from 'react';
import PropTypes from 'prop-types';
import { IoClose  } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa6";
import { VscChromeMinimize } from "react-icons/vsc";

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
    maximizeClicked(identifier)
  };

  const closeApp = () => {
    focusOff(identifier);
    minimizeOn(identifier);
    runningOff(identifier);
  };

  const focusApp = () => {
    focusOn(identifier);
  };

  const doubleClickMaximize = () => {
    maximizeClicked(identifier)
  };

  return (
    <FrameHeaderStyled className="frameHeader-container" onClick={focusApp} onDoubleClickCapture={doubleClickMaximize}>
      <div className="frame-name">
        { name }
      </div>
      <div className="icons">
        <div className='icon-border'>
          <div className="icon-container" onClick={minimizeApp}>
            <VscChromeMinimize className="icon" />
          </div>
        </div>
        <div className='icon-border'>
          <div className="icon-container" onClick={maximizeApp}>
            <FaRegSquare className="icon" />
          </div>
        </div>
        <div className='icon-border'>
          <div className="icon-container icon-x" onClick={closeApp}>
            <IoClose className="icon" />
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
