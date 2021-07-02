import styled from 'styled-components';

const SettingsStyled = styled.div`

  display: ${(props) => {
    if (props.settings.running && !props.settings.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.settings.zIndex};
`;

export default SettingsStyled;
