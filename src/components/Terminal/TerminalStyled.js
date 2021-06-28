import styled from 'styled-components';

import UbuntuFont from '../../assets/fonts/ubuntuMono.woff2';

const TerminalStyled = styled.div`

@font-face {
  font-family: 'UbuntuFont';
  src: local('UbuntuFont'),
  url(${UbuntuFont}) format('woff2');
}

display: ${(props) => {
    if (props.terminal.running && !props.terminal.minimize) {
      return 'flex';
    }
    return 'none';
  }};

z-index: ${(props) => props.terminal.zIndex};

.terminal-inside {
  background-color: #2C001E;
  color: white;
  padding: 2px;
  font-family: 'UbuntuFont';
  overflow: scroll;
}

.terminal-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.prefix-name {
  color: #73d216;
}

.prefix-path {
  color: #3465a4;
  margin-right: 1px;
}

.terminal-spacer {
  margin-right: 2px;
}

.terminal-input {
  border: none;
  color: white;
  background-color: #2C001E;
  padding: 0;
  outline: none;
  font-family: 'UbuntuFont';
  font-size: 1em;
  width: 100%;
}

.terminal-input:focus {
  border: none;
}

.command-text {
  display: inline;
  overflow-wrap: break-word;
}

`;

export default TerminalStyled;
