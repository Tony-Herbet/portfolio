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

  .settings-frame-inside {
    display: flex;
    flex-direction: row !important;
  }

  .categories {
    width: 200px;
    background-color: ${props => props.theme.colors[props.theme.themeStyle].tertiary};
  }

  .categorie {
    padding: 0.5rem 0.5rem 0.5rem 0;
    display: flex;
    align-items: center;
  }

  .categorie:hover {
    background-color: hsl(0, 0%, 100%, 0.2);
  }

  .categorie > * {
    margin-left: 0.5rem;
  }

  .categorie-colors {
    border-left: ${props => props.categoryFocused === 'colors' ? props.theme.colors.accent : 'transparent'} solid 5px;
  }

  .categorie-background {
    border-left: ${props => props.categoryFocused === 'background' ?  props.theme.colors.accent : 'transparent'} solid 5px;

  }

  .options {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors[props.theme.themeStyle].secondary};
    width: 100%;
  }

  .options > * {
    margin: 0.5rem
  }

  .theme-select {
    width: 100px;
  }
`;

export default SettingsStyled;
