import React from 'react';
import PropTypes from 'prop-types';

import TaskbarStyled from './TaskbarStyled';
import TerminalImage from 'assets/images/icons/terminal.svg';
import BrowserImage from 'assets/images/icons/browser.svg';
import FolderImage from 'assets/images/icons/folder.svg';
import TxtReaderImage from 'assets/images/icons/txt.svg';
import SettingsImage from 'assets/images/icons/settings.svg';
import PdfImage from 'assets/images/icons/pdf.svg'
import MailImage from 'assets/images/icons/mail.svg'
import LanguageMenu from 'containers/LanguageMenu';

// For SVG import use https://jakearchibald.github.io/svgomg/
// To compress the SVG to fix an issue:
// https://github.com/facebook/create-react-app/issues/11770

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
  mail
}) => {
  const handleClick = (event, app) => {
    console.log('taskbar click on:', event.currentTarget.id)
    if (app.running === false) {
      focusOn(event.currentTarget.id);
      runningOn(event.currentTarget.id);
      minimizeOff(event.currentTarget.id);
    }
    if (app.running === true) {
      if (app.focus === true) {
        focusOff(event.currentTarget.id);
        minimizeOn(event.currentTarget.id);
      }
      if (app.focus === false) {
        focusOn(event.currentTarget.id);
        minimizeOff(event.currentTarget.id);
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
      txtreader={txtReader}
      settings={settings}
      pdf={pdf}
      mail={mail}
    >
      <div className='taskbar-icons'>
        <div className="task task-terminal" id="terminal" onClick={(event) => handleClick(event, terminal)}>
          <span className="task-indicator terminal-indicator"/>
          <img src={TerminalImage} alt="" className="task-icon"/>
        </div>
        <div className="task task-folder"  id="folder" onClick={(event) => handleClick(event, folder)}>
          <span className="task-indicator folder-indicator"/>
          <img src={FolderImage} alt="" className="task-icon"/>
        </div>
        <div className="task task-browser" id="browser" onClick={(event) => handleClick(event, browser)}>
          <span className="task-indicator browser-indicator"/>
          <img src={BrowserImage} alt="" className="task-icon"/>
        </div>
        <div className="task task-txtReader" id="txtReader" onClick={(event) => handleClick(event, txtReader)}>
          <span className="task-indicator txtReader-indicator"/>
          <img src={TxtReaderImage} alt="" className="task-icon"/>
        </div>
        <div className="task task-settings" id="settings" onClick={(event) => handleClick(event, settings)}>
          <span className="task-indicator settings-indicator" />
          <img src={SettingsImage} alt="" className="task-icon"/>
        </div>
        <div className="task task-pdf" id="pdf" onClick={(event) => handleClick(event, pdf)}>
          <span className="task-indicator pdf-indicator" />
          <img src={PdfImage} alt="" className="task-icon"/>
        </div>
        <div className="task task-mail" id="mail" onClick={(event) => handleClick(event, mail)}>
          <span className="task-indicator mail-indicator" />
          <img src={MailImage} alt="" className="task-icon"/>
        </div>
      </div>
      <LanguageMenu />
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
  mail: PropTypes.object.isRequired,
};

export default Taskbar;
