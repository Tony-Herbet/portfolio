import styled from 'styled-components';

const SettingsStyled = styled.div`

  display: ${(props) => {
    if (props.settings.running && !props.settings.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.settings.zIndex};

  /* Position when maximize */
  top: ${props => props.settings.maximize ? '50px' : '30vh' };
  left: ${props => props.settings.maximize ? '0' : '25vw' }; /* width should be vw - (right + left )*/
  right: ${props => props.settings.maximize ? '0' : '25vw' };
  height: ${props => props.settings.maximize ? 'calc(100vh - 52px)' : '450px' }; /* Screen size - taskbar + frames borders */

  /* Border when maximize */
  border: solid 1px ${props =>  props.settings.maximize ? 'transparent': props.theme.accent};
  border-top-left-radius: ${props =>  props.settings.maximize ? 0 : '0.5rem'};
  border-top-right-radius: ${props =>  props.settings.maximize ? 0 : '0.5rem'};

  .settings-frame-inside {
    display: flex;
    flex-direction: row !important;
  }

  .categories {
    width: 200px;
    background-color: ${props => props.theme[props.theme.themeStyle].tertiary};
  }

  .categorie {
    padding: 0.5rem 0.5rem 0.5rem 0;
    display: flex;
    align-items: center;
  }

  .categorie:hover {
    background-color: ${props => props.theme[props.theme.themeStyle].highlight};
  }

  .categorie > * {
    margin-left: 0.5rem;
  }

  .categorie-colors {
    border-right: ${props => props.categoryfocused  === 'colors' ? props.theme.accent : 'transparent'} solid 5px;
  }

  .categorie-background {
    border-right: ${props => props.categoryfocused  === 'background' ?  props.theme.accent : 'transparent'} solid 5px;

  }

  .options {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme[props.theme.themeStyle].secondary};
    width: 100%;
  }

  .options > * {
    margin: 0.5rem
  }

  .theme-select {
    width: 100px;
  }

  .accent-square-display {
    background-color: ${props => props.theme.accent};
    height: 25px;
    width: 25px;
    border: rgb(255, 255, 255) solid 2px;
  }

  .settings-images {
    width: 100px;
    height: 100px;
    object-fit: cover; /* Keep aspect ratio */
    margin-right: 0.5rem;
    border: solid transparent 2px
  }

  .settings-images-container >*:hover {
    background-color: ${props => props.theme.accent}
  }
`;

export default SettingsStyled;
