import styled from 'styled-components';

const FolderStyled = styled.div`

  display: ${(props) => {
    if (props.folder.running && !props.folder.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.folder.zIndex};

  /* Position when maximize */
  top: ${props => props.folder.maximize ? '50px' : '80px' };
  right: ${props => props.folder.maximize ? '0' : '0.8rem' };
  left: ${props => props.folder.maximize ? '0' : '0.8rem' };
  height: ${props => props.folder.maximize ? 'calc(100vh - 50px)' : '450px' };

  /* Border when maximize */
  border: solid 1px ${props =>  props.folder.maximize ? 'transparent': props.theme.accent};
  border-top-left-radius: ${props =>  props.folder.maximize ? 0 : '0.5rem'};
  border-top-right-radius: ${props =>  props.folder.maximize ? 0 : '0.5rem'};

  .folder-nav {
    display: flex;
    background-color: ${props => props.theme[props.theme.themeStyle].tertiary};
    border-bottom: ${props => props.theme.frameInsideHeader.borderBottom};
    padding: ${props => props.theme.frameInsideHeader.padding};
  }

  .nav-icons {
    display: flex;
    align-items: center;
    margin: 0 0.2rem;
  }

  .adressBar {
    flex-grow: 2;
    border: solid 0.1rem #000000;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0.2rem;
    margin: 0 0.2rem;
    font-size: small;
  }

  .url {
    margin: 0;
    padding-left: 0.2rem;
    flex-grow: 2;
  }

  .icon {
    width: 12px;
    height: 12px;
    display: flex;
    align-self: center;
  }

  .type-icon {
    display: flex;
    align-self: center;
    width: 35px;
    height: 35px;
  }

  .folders-container {
    display: flex;
    padding: 1rem 0.3rem;
  }

  .folder-item {
    margin-right: 0.3rem;
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    height: 75px;
  }

  .folder-item:hover {
    background-color: ${props => props.theme[props.theme.themeStyle].taskbar.hover}
  }

  .folder-idem-focused {
    background-color: ${props => props.theme[props.theme.themeStyle].taskbar.focus}
  }

  .folder-idem-focused:hover {
    background-color: ${props => props.theme[props.theme.themeStyle].taskbar.hoverFocus}
  }
`;

export default FolderStyled;
