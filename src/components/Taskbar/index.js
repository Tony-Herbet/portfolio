import React from 'react';
import PropTypes from 'prop-types';

import TaskbarStyled from './TaskbarStyled';
import TerminalImage from '../../assets/images/terminal.svg';
import ChromiumImage from '../../assets/images/chromium.svg';
import FolderImage from '../../assets/images/folder.svg';

const Taskbar = ({
  runningOn,
  minimizeOn,
  focusOn,
  minimizeOff,
  focusOff,
  terminal,
  browser,
  folder,
}) => {
  const handleTerminal = (event) => {
    if (event.target.id === 'terminal') {
      if (terminal.running === false) {
        focusOn(event.target.id);
        runningOn(event.target.id);
        minimizeOff(event.target.id);
      }
      if (terminal.running === true) {
        if (terminal.focus === true) {
          focusOff(event.target.id);
          minimizeOn(event.target.id);
        }
        if (terminal.focus === false) {
          focusOn(event.target.id);
          minimizeOff(event.target.id);
        }
      }
    }
  };
  const handleBrowser = (event) => {
    if (event.target.id === 'browser') {
      if (browser.running === false) {
        focusOn(event.target.id);
        runningOn(event.target.id);
        minimizeOff(event.target.id);
      }
      if (browser.running === true) {
        if (browser.focus === true) {
          focusOff(event.target.id);
          minimizeOn(event.target.id);
        }
        if (browser.focus === false) {
          focusOn(event.target.id);
          minimizeOff(event.target.id);
        }
      }
    }
  };
  const handleFolder = (event) => {
    if (event.target.id === 'folder') {
      if (folder.running === false) {
        focusOn(event.target.id);
        runningOn(event.target.id);
        minimizeOff(event.target.id);
      }
      if (folder.running === true) {
        if (folder.focus === true) {
          focusOff(event.target.id);
          minimizeOn(event.target.id);
        }
        if (folder.focus === false) {
          focusOn(event.target.id);
          minimizeOff(event.target.id);
        }
      }
    }
  };

  return (
    <TaskbarStyled
      className="taskbar-container"
      terminal={terminal}
      browser={browser}
      folder={folder}
    >
      <div className="task task-terminal">
        <span className="task-indicator terminal-indicator" />
        <img src={TerminalImage} alt="" className="task-icon" id="terminal" onClick={handleTerminal} />
      </div>
      <div className="task task-folder">
        <span className="task-indicator folder-indicator" />
        <img src={FolderImage} alt="" className="task-icon" id="folder" onClick={handleFolder} />
      </div>
      <div className="task task-browser">
        <span className="task-indicator browser-indicator" />
        <img src={ChromiumImage} alt="" className="task-icon" id="browser" onClick={handleBrowser} />
      </div>
    </TaskbarStyled>
  );
};

Taskbar.propTypes = {
  runningOn: PropTypes.func.isRequired,
  minimizeOn: PropTypes.func.isRequired,
  focusOn: PropTypes.func.isRequired,
  minimizeOff: PropTypes.func.isRequired,
  focusOff: PropTypes.func.isRequired,
  terminal: PropTypes.object.isRequired,
  browser: PropTypes.object.isRequired,
  folder: PropTypes.object.isRequired,
};

export default Taskbar;
