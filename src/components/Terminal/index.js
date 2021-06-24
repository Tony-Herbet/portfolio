import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import TerminalStyled from './TerminalStyled';
import FrameHeader from '../../containers/FrameHeader';

const Terminal = ({
  terminal,
  inputValue,
  terminalInputUpdate,
  history,
}) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = (event) => {
    terminalInputUpdate(event.target.value);
  };
  const focusInput = () => {
    inputRef.current.focus();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === 'help') {
      console.log('help cmd');
    }
    else {
      console.log('not a cmd');
    }
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
        <div className="terminal-content">
          {history.map((elm) => (
            // TODO when css is done, put html directly in the array ?
            <>
              <div className="terminal-prefix">
                <span className="prefix-name">tony@portfolio</span>
                :
                <span className="prefix-path">~/skills</span>
              </div>
              <div className="history-text">
                {elm.name}
              </div>
            </>
          ))}
        </div>
        )}
        <div className="terminal-content">
          <div className="terminal-prefix">
            <span className="prefix-name">tony@portfolio</span>
            :
            <span className="prefix-path">~</span>
            $
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
};

export default Terminal;
