import styled from 'styled-components';

const TerminalStyled = styled.div`

  display: ${(props) => {
    if (props.terminal.running) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.terminal.zIndex};

  /* Mimic resize visual effects */
  top: ${(props) => {
    // Maximize
    if (props.terminal.maximize) {
      return '50px';
    }
    // Minimize
    else if (props.terminal.running && props.terminal.minimize) {
      return '-100vh';
    }
    // Default
    else {
      return '80px';
    }
  }};
  left: ${(props) => { /* width is: vw - (left + right )*/
    // Maximize
    if (props.terminal.maximize) {
      return '0';
    }
    // Minimize
    else if (props.terminal.running && props.terminal.minimize) {
      return '50vw';
    }
    // Default
    else {
      return '0.8rem';
    }
  }};  
  right: ${(props) => {
    // Maximize
    if (props.terminal.maximize) {
      return '0';
    }
    // Minimize
    else if (props.terminal.running && props.terminal.minimize) {
      return '50vw';
    }
    // Default
    else {
      return '50vw';
    }
  }};
  height: ${props => props.terminal.maximize ? 'calc(100vh - 52px)' : '450px' }; /* Screen size - taskbar + frames borders */
  opacity: ${props => props.terminal.minimize ? '0' : '1' }; /* Mimic fade in-out */

  /* Border when maximize */
  border: solid 1px ${props =>  props.terminal.maximize ? 'transparent': props.theme.accent};
  border-top-left-radius: ${props =>  props.terminal.maximize ? 0 : '0.5rem'};
  border-top-right-radius: ${props =>  props.terminal.maximize ? 0 : '0.5rem'};

  .terminal-inside {
    background-color: ${props => props.theme.terminal.background} !important;
    color: ${props => props.theme.terminal.text};
    padding: 2px;
    font-family: 'UbuntuFont';
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .terminal-content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .terminal-prefix {
    display: flex;
  }

  .prefix-name {
    color: ${props => props.theme.terminal.prefixName};
  }

  .prefix-path {
    color: ${props => props.theme.terminal.prefixPathAndFolder};
    margin-right: 1px;
  }

  .terminal-spacer {
    margin-right: 5px;
    color: ${props => props.theme.terminal.prefixSpacer};
  }

  .terminal-form {
    width: 100%
  }

  .terminal-input {
    border: none;
    color: ${props => props.theme.terminal.text};
    background-color: ${props => props.theme.terminal.background};
    padding: 0;
    outline: none;
    font-family: 'UbuntuFont';
    font-size: 1rem;
    width: 100%;
    cursor: default;
  }

  .terminal-input:focus {
    border: none;
  }

  .command-text {
    display: inline;
    overflow-wrap: break-word;
  }

  .help-container {
    display: flex;
  }

  .help-name {
    min-width: 50px;
  }

  .help-description {
    padding-left: 1rem;
  }

  .folder {
    color: ${props => props.theme.terminal.prefixPathAndFolder};
  }
`;

export default TerminalStyled;
