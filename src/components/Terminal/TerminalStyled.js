import styled from 'styled-components';

const TerminalStyled = styled.div`

display: ${(props) => {
    if (props.terminal.running && !props.terminal.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.terminal.zIndex};
`;

export default TerminalStyled;
