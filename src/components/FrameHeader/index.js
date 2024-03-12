/* eslint-disable no-useless-concat */
import React, { useEffect } from "react";
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
  utils,
  changeDragStartValues,
  changeAppAxisValues,
  focusOn,
  toggleTransition,
}) => {
  // On mount we need to check the size of the screen and move the windows if necessary so they're not out of bound
  useEffect(() => {
    // App initial values
    const appX = utils[identifier].x;
    const appY = utils[identifier].y;
    // Values in pixel
    const appWidthValueInPixel =
      (window.innerWidth * utils[identifier].width) / 100;
    const appHeightValueInPixel =
      (window.innerHeight * utils[identifier].height) / 100;

    if (appWidthValueInPixel + appX >= window.innerWidth) {
      changeAppAxisValues(identifier, { x: 0, y: utils[identifier].y });
    }
    if (appHeightValueInPixel + appY + 50 >= window.innerHeight) {
      changeAppAxisValues(identifier, {
        x: utils[identifier].x,
        y: 50 /* Taskbar size */,
      });
    }
  }, []);

  const minimizeApp = (e) => {
    // This is to prevent the click event to also trigger the focusOn on the parent which result in a display bug
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    minimizeOn(identifier);
  };

  const maximizeApp = () => {
    // This is supposed to prevent maximize on mobile/tablet but it's not perfect, it can be bypass when spamming
    // TODO find a better solution
    if (window.innerWidth > 1024) {
      maximizeClicked(identifier);
    }
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

  const handleDragStart = (e) => {
    changeDragStartValues({ x: e.clientX, y: e.clientY });
    focusOn(identifier);
    toggleTransition(false);
  };

  const handleDragEnd = (e) => {
    // App initial values
    const appX = utils[identifier].x;
    const appY = utils[identifier].y;

    // Moved values, offset from end to start
    const xMoved = e.clientX - utils.dragStart.x;
    const yMoved = e.clientY - utils.dragStart.y;

    // What it should be at the end
    let xEnd = appX + xMoved;
    let yEnd = appY + yMoved;

    // Values in pixel
    const appWidthValueInPixel =
      (window.innerWidth * utils[identifier].width) / 100;
    const appHeightValueInPixel =
      (window.innerHeight * utils[identifier].height) / 100;

    // Check if the window goes beyond the left boundary
    if (xEnd <= 0) {
      xEnd = 0;
    }
    // Check if the window goes beyond the right boundary
    else if (xEnd + appWidthValueInPixel >= window.innerWidth) {
      xEnd = window.innerWidth - appWidthValueInPixel - 4 /* border */;
    }

    // Check if the window goes beyond the top boundary
    if (yEnd <= 50 /* Taskbar size */) {
      yEnd = 50;
    }
    // Check if the window goes beyond the bottom boundary
    else if (yEnd + appHeightValueInPixel >= window.innerHeight) {
      yEnd = window.innerHeight - appHeightValueInPixel - 4 /* border */;
    }

    // Update the window position
    changeAppAxisValues(identifier, { x: xEnd, y: yEnd });

    const transitionTimeout = setTimeout(() => {
      toggleTransition(true);
      clearTimeout(transitionTimeout);
    }, 500);
  };

  return (
    <FrameHeaderStyled
      className="frameHeader-container"
      onDoubleClickCapture={doubleClickMaximize}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
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
  utils: PropTypes.object.isRequired,
  changeDragStartValues: PropTypes.func.isRequired,
  changeAppAxisValues: PropTypes.func.isRequired,
  focusOn: PropTypes.func.isRequired,
  toggleTransition: PropTypes.func.isRequired,
};

export default FrameHeader;
