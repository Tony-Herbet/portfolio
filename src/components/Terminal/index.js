import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import TerminalStyled from './TerminalStyled';
import FrameHeader from '../../containers/FrameHeader';

const Terminal = ({
  terminal,
  inputValue,
  terminalInputUpdate,
  history,
  commands,
  pushHistory,
  clearHistory,
  clearInput,
  path,
  data,
  pathUpdate,
  openTxtFromTerminal,
  focusFileTab,
  filesOpen,
  focusOn,
  pushCmdHistory,
  inputHistory,
  arrowCounter,
  updateArrowCounter,
}) => {
  const inputRef = useRef();
  // Focus on terminal & auto scroll
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.scrollIntoView({ behavior: 'smooth' });
  });
  // Focus on terminal
  const focusInput = () => {
    inputRef.current.focus();
  };
  // Save input in state
  const handleChange = (event) => {
    terminalInputUpdate(event.target.value);
  };
  // Handle all the commands
  const handleSubmit = (event) => {
    event.preventDefault();
    // Push cmd typed
    pushCmdHistory(inputValue);
    // Input Trim & Split
    const cmdInput = inputValue.trim().split(' ');
    const cmdName = cmdInput[0];
    const cmdOption = cmdInput[1];
    // Search if command exist
    const userCommand = commands.find((cmd) => cmd.name === inputValue);
    // Command exist
    if (userCommand !== undefined || cmdName === 'cd' || cmdName === 'open') {
      // All the commands
      // Help
      if (inputValue === 'help') {
        pushHistory(commands.map((cmd) => <div className="help-container" key={cmd.name}><span className="help-name">{cmd.name}</span>|<span className="help-description">{cmd.description}</span></div>));
      }
      // LS
      if (inputValue === 'ls') {
        // In portfolio directory
        if (path === '') {
          pushHistory(data.map((folderContent) => (
            <div className={folderContent.type} key={folderContent.name}>{folderContent.name}</div>
          )));
        }
        // In another directory
        else {
          const contentData = data.find((content) => content.name === path);
          pushHistory(contentData.content.map((folderContent) => (
            <div className={folderContent.type} key={folderContent.name}>{folderContent.name}</div>
          )));
        }
      }
      // CD
      if (cmdName === 'cd') {
        // cd .. && in root directory
        if (cmdOption === '..' && path === '') {
          pushHistory('already in the root directory you can\'t move up');
        }
        // cd .. && not in root directory
        else if (cmdOption === '..') {
          pushHistory();
          pathUpdate('');
        }
        // No option given
        else if (cmdOption === undefined) {
          pushHistory("cd command need a directory name, type 'ls' to see all the directories or 'help' to see all the commands");
        }
        // Directory exist
        else if (data.find((content) => content.name === cmdOption) || (cmdOption.startsWith('../') && data.find((content) => content.name === cmdOption.replace('../', '')))) {
          pushHistory();
          pathUpdate(cmdOption.replace('../', ''));
        }
        // Doesn't exist
        else {
          pushHistory(`directory '${cmdOption}' not found, type 'ls' to see all the directories or 'help' to see all the commands`);
        }
      }
      // OPEN
      if (cmdName === 'open') {
        const extension = '.txt';
        const findObj = data.find((obj) => obj.content.find(
          (file) => file.name === cmdOption || file.name === cmdOption + extension,
        ));
        // No option given
        if (cmdOption === undefined) {
          pushHistory(`open command need a file name, type 'ls' to see all
          the files in current directory or 'help' to see all the commands`);
        }
        // File exist
        else if (findObj !== undefined) {
          const objContent = findObj.content.find(
            (file) => file.name === cmdOption || file.name === cmdOption + extension,
          );
          pushHistory();
          // Send obj to TxtReader
          // if file already open just focus on TxtReader and tab
          if (filesOpen.find((file) => file === objContent)) {
            focusOn('txtReader');
            focusFileTab(objContent.name);
          }
          // else send file to txtReader and focus tab
          else {
            openTxtFromTerminal(objContent);
            focusFileTab(objContent.name);
          }
        }
        // File doesn't exist
        else {
          pushHistory(`file '${cmdOption}' not found, type 'ls' to see all
          the files in current directory or 'help' to see all the commands`);
        }
      }
      // Clear History
      if (inputValue === 'clear') {
        clearHistory();
      }
    }
    // Command doesn't exist
    else {
      pushHistory(`command '${inputValue}' not found, type 'help' to see all the commands`);
    }
    // Clear input in state & arrowCounter
    updateArrowCounter(0);
    clearInput();
  };

  const handleKeyUp = (event) => {
    event.preventDefault();
    // TODO it kinda works but i don't know why! need a rework
    if (event.code === 'ArrowUp') {
      if ((inputHistory.length - arrowCounter) > 0) {
        updateArrowCounter(arrowCounter + 1);
        terminalInputUpdate(inputHistory[inputHistory.length - arrowCounter - 1]);
      }
    }
    if (event.code === 'ArrowDown') {
      if (arrowCounter > 0) {
        updateArrowCounter(arrowCounter - 1);
        terminalInputUpdate(inputHistory[inputHistory.length - arrowCounter]);
      }
    }
  };

  return (
    <TerminalStyled className="frame-container" terminal={terminal} onClick={focusInput} onKeyUp={handleKeyUp}>
      <FrameHeader identifier="terminal" name="Terminal" />
      <div className="frame-inside terminal-inside">
        <div className="terminal-header">
          PowerBash, version -8000.0.0 alpha
          You can run commands. Type 'help' to see the list.
        </div>
        {history.length > 0 && (
          <>
            {history.map((elm) => (
              <div className="terminal-content" key={elm.id}>
                <div className="terminal-prefix">
                  <span className="prefix-name">tony@portfolio</span>
                  :
                  <span className="prefix-path">~{elm.path}</span>
                  <span className="terminal-spacer">$</span>
                  <span className="command-text">{elm.cmd}</span>
                </div>
                <div className="history-text">
                  {elm.text}
                </div>
              </div>
            ))}
          </>
        )}
        <div className="terminal-content">
          <div className="terminal-prefix">
            <span className="prefix-name">tony@portfolio</span>
            :
            <span className="prefix-path">~{path}</span>
            <span className="terminal-spacer">$</span>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" className="terminal-input" ref={inputRef} value={inputValue} onChange={handleChange} />
          </form>
        </div>
      </div>
    </TerminalStyled>
  );
};

Terminal.propTypes = {
  terminal: PropTypes.object.isRequired,
  inputValue: PropTypes.string.isRequired,
  terminalInputUpdate: PropTypes.func.isRequired,
  history: PropTypes.array.isRequired,
  commands: PropTypes.array.isRequired,
  clearHistory: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  pushHistory: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  pathUpdate: PropTypes.func.isRequired,
  openTxtFromTerminal: PropTypes.func.isRequired,
  focusFileTab: PropTypes.func.isRequired,
  filesOpen: PropTypes.array.isRequired,
  focusOn: PropTypes.func.isRequired,
  pushCmdHistory: PropTypes.func.isRequired,
  inputHistory: PropTypes.array.isRequired,
  arrowCounter: PropTypes.number.isRequired,
  updateArrowCounter: PropTypes.func.isRequired,
};

export default Terminal;
