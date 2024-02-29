/* eslint-disable no-useless-concat */
import React from "react";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa6";
import { VscChromeMinimize } from "react-icons/vsc";

import FrameHeaderStyled from "./FrameHeaderStyled";
import TerminalImage from "../../assets/images/icons/terminal.svg";
import BrowserImage from "../../assets/images/icons/browser.svg";
import FolderImage from "../../assets/images/icons/folder.svg";
import TxtReaderImage from "../../assets/images/icons/txt.svg";
import SettingsImage from "../../assets/images/icons/settings.svg";
import PdfImage from "../../assets/images/icons/pdf.svg";
import MailImage from "../../assets/images/icons/mail.svg";

const FrameHeader = ({
  minimizeOn,
  maximizeClicked,
  runningOff,
  identifier,
  name,
}) => {
  const minimizeApp = (e) => {
    // This is to prevent the click event to also trigger the focusOn on the parent which result in a display bug
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    minimizeOn(identifier);
  };

  const maximizeApp = () => {
    maximizeClicked(identifier);
  };

  const closeApp = (e) => {
    // This is to prevent the click event to also trigger the focusOn on the parent which result in a display bug
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    runningOff(identifier);
  };

  const doubleClickMaximize = () => {
    maximizeClicked(identifier);
  };

  const defineIcon = () => {
    switch (identifier) {
      case "terminal":
        return TerminalImage;
      case "browser":
        return BrowserImage;
      case "folder":
        return FolderImage;
      case "txtReader":
        return TxtReaderImage;
      case "settings":
        return SettingsImage;
      case "pdf":
        return PdfImage;
      case "mail":
        return MailImage;
      default:
        break;
    }
  };

  return (
    <FrameHeaderStyled
      className="frameHeader-container"
      onDoubleClickCapture={doubleClickMaximize}
    >
      <div className="frameHeader-header">
        <img src={defineIcon()} alt="" className="header-icon" />
        {name}
      </div>
      <div className="icons">
        <div className="icon-border" onClick={minimizeApp}>
          <div className="icon-container">
            <VscChromeMinimize className="icon" />
          </div>
        </div>
        <div className="icon-border" onClick={maximizeApp}>
          <div className="icon-container">
            <FaRegSquare className="icon" />
          </div>
        </div>
        <div className="icon-border icon-border-x" onClick={closeApp}>
          <div className="icon-container icon-x">
            <IoClose className="icon" />
          </div>
        </div>
      </div>
    </FrameHeaderStyled>
  );
};

FrameHeader.propTypes = {
  minimizeOn: PropTypes.func.isRequired,
  maximizeClicked: PropTypes.func.isRequired,
  runningOff: PropTypes.func.isRequired,
  identifier: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FrameHeader;
