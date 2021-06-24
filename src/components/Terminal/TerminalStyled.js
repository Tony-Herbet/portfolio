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
}

.terminal-content {
  display: flex;
  width: 100%;
}

.prefix-name {
  color: #73d216;
}

.prefix-path {
  color: #3465a4;
}

.terminal-input {
  border: none;
  color: white;
  background-color: #2C001E;
  padding: 0;
  outline: none;
  font-family: 'UbuntuFont';
  font-size: 1em;
  margin-left: 2px;
  width: 100%;
}

.terminal-input:focus {
  border: none;
}

.history-text {
  margin-left: 2px;
}
`;

export default TerminalStyled;
