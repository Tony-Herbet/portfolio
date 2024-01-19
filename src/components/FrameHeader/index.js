/* eslint-disable no-useless-concat */
import React from 'react';
import PropTypes from 'prop-types';
import { IoClose  } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa6";
import { VscChromeMinimize } from "react-icons/vsc";

import FrameHeaderStyled from './FrameHeaderStyled';
import TerminalImage from '../../assets/images/icons/terminal.svg';
import ChromiumImage from '../../assets/images/icons/chromium.svg';
import FolderImage from '../../assets/images/icons/folder.svg';
import TxtReaderImage from '../../assets/images/icons/txt.svg';
import SettingsImage from '../../assets/images/icons/settings.svg';
import ClayGymnastReaderImage from '../../assets/images/icons/pdf.svg'
import MailImage from '../../assets/images/icons/mail.svg'

const FrameHeader = ({
  focusOn,
  focusOff,
  minimizeOn,
  maximizeClicked,
  runningOff,
  identifier,
  name,
  icon,
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

  const defineIcon = () => {
    if(icon === "terminal") {
      return TerminalImage
    }
    if(icon === "browser") {
      return ChromiumImage
    }
    if(icon === "folder") {
      return FolderImage
    }
    if(icon === "txtreader") {
      return TxtReaderImage
    }
    if(icon === "settings") {
      return SettingsImage
    }   
    if(icon === "pdf") {
      return ClayGymnastReaderImage
    }
    if(icon === "mail") {
      return MailImage
    }
  }

  return (
    <FrameHeaderStyled className="frameHeader-container" onClick={focusApp} onDoubleClickCapture={doubleClickMaximize}>
      <div className="frameHeader-header">
        <img src={defineIcon()} alt="" className="header-icon" />

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
  icon: PropTypes.any.isRequired,
};

export default FrameHeader;
