import styled from 'styled-components';

const TerminalStyled = styled.div`

  display: ${(props) => {
    if (props.terminal.running && !props.terminal.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.terminal.zIndex};

  /* Position when maximize */
  top: ${props => props.terminal.maximize ? '50px' : '80px' };
  left: ${props => props.terminal.maximize ? '0' : '0.8rem' }; /* width should be vw - (right + left )*/
  right: ${props => props.terminal.maximize ? '0' : '50vw' };
  height: ${props => props.terminal.maximize ? 'calc(100vh - 52px)' : '450px' }; /* Screen size - taskbar + frames borders */ /* */

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
