import styled from 'styled-components';

const SettingsStyled = styled.div`

  display: ${(props) => {
    if (props.settings.running && !props.settings.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  top: ${props => props.settings.maximize ? '50px' : '80px' };
  right: ${props => props.settings.maximize ? '0' : '0.8rem' };
  left: ${props => props.settings.maximize ? '0' : '0.8rem' };
  height: ${props => props.settings.maximize ? 'calc(100vh - 50px)' : '450px' };

  z-index: ${(props) => props.settings.zIndex};
`;

export default SettingsStyled;
