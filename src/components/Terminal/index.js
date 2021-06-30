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
    // Input Trim & Split
    const inputTrim = inputValue.trim();
    const inputSplit = inputTrim.split(' ');
    // Search if command exist
    const userCommand = commands.find((cmd) => cmd.name === inputValue);
    // Command exist
    if (userCommand !== undefined || inputSplit[0] === 'cd') {
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
      if (inputSplit[0] === 'cd') {
        const cdOption = inputSplit[1];
        // cd .. && in root directory
        if (cdOption === '..' && path === '') {
          pushHistory('You are already in the root directory you can\'t move up');
        }
        // cd .. && not in root directory
        else if (cdOption === '..') {
          pushHistory();
          pathUpdate('');
        }
        // Directory exist
        else if (data.find((content) => content.name === cdOption)) {
          pushHistory();
          pathUpdate(cdOption);
        }
        // Doesn't exist
        else {
          pushHistory("Directory doesn't exist, type 'ls' to see all the directories or 'help' to see all the commands");
        }
      }
      // Clear History
      if (inputValue === 'clear') {
        clearHistory();
      }
    }
    // Command doesn't exist
    else {
      pushHistory(`Command '${inputValue}' not found, type 'help' to see all the commands`);
    }
    // Clear input in state
    clearInput();
  };

  return (
    <TerminalStyled className="frame-container" terminal={terminal} onClick={focusInput}>
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
};

export default Terminal;
