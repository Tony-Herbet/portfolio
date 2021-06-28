/* eslint-disable array-callback-return */
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
    // Search if command exist
    const userCommand = commands.find((cmd) => cmd.name === inputValue);
    // Command exist
    if (userCommand !== undefined) {
      // All the commands

      // Clear History
      if (inputValue === 'clear') {
        clearHistory();
      }
      if (inputValue === 'help') {
        // eslint-disable-next-line arrow-body-style
        pushHistory(commands.map((cmd) => {
          return <div>{cmd.name} : {cmd.description}</div>;
        }));
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
};

export default Terminal;
