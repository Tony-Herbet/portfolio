import React from 'react';
import PropTypes from 'prop-types';

import TaskbarStyled from './TaskbarStyled';
import TerminalImage from 'assets/images/terminal.svg';
import ChromiumImage from 'assets/images/chromium.svg';
import FolderImage from 'assets/images/folder.svg';
import TxtReaderImage from 'assets/images/txt.svg';
import SettingsImage from 'assets/images/settings.svg';
import ClayGymnastReaderImage from 'assets/images/pdf.svg'

const Taskbar = ({
  runningOn,
  minimizeOn,
  focusOn,
  minimizeOff,
  focusOff,
  terminal,
  browser,
  folder,
  txtReader,
  settings,
  pdf,
}) => {
  const handleClick = (app) => (event) => {
    if (app.running === false) {
      focusOn(event.target.id);
      runningOn(event.target.id);
      minimizeOff(event.target.id);
    }
    if (app.running === true) {
      if (app.focus === true) {
        focusOff(event.target.id);
        minimizeOn(event.target.id);
      }
      if (app.focus === false) {
        focusOn(event.target.id);
        minimizeOff(event.target.id);
      }
    }
  };
  // TODO Mutualize
  return (
    <TaskbarStyled
      className="taskbar-container"
      terminal={terminal}
      browser={browser}
      folder={folder}
      txtReader={txtReader}
      settings={settings}
      pdf={pdf}
    >
      <div className="task task-terminal">
        <span className="task-indicator terminal-indicator" />
        <img src={TerminalImage} alt="" className="task-icon" id="terminal" onClick={handleClick(terminal)} />
      </div>
      <div className="task task-folder">
        <span className="task-indicator folder-indicator" />
        <img src={FolderImage} alt="" className="task-icon" id="folder" onClick={handleClick(folder)} />
      </div>
      <div className="task task-browser">
        <span className="task-indicator browser-indicator" />
        <img src={ChromiumImage} alt="" className="task-icon" id="browser" onClick={handleClick(browser)} />
      </div>
      <div className="task task-txtReader">
        <span className="task-indicator txtReader-indicator" />
        <img src={TxtReaderImage} alt="" className="task-icon" id="txtReader" onClick={handleClick(txtReader)} />
      </div>
      <div className="task task-settings">
        <span className="task-indicator settings-indicator" />
        <img src={SettingsImage} alt="" className="task-icon" id="settings" onClick={handleClick(settings)} />
      </div>
      <div className="task task-pdf">
        <span className="task-indicator pdf-indicator" />
        <img src={ClayGymnastReaderImage} alt="" className="task-icon" id="pdf" onClick={handleClick(pdf)} />
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
  txtReader: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  pdf: PropTypes.object.isRequired,
};

export default Taskbar;
