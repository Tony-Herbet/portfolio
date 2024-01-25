import styled from 'styled-components';

const FolderStyled = styled.div`

  display: ${(props) => {
    if (props.folder.running) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.folder.zIndex};

  /* Mimic resize visual effects */
  top: ${(props) => {
    // Maximize
    if (props.folder.maximize) {
      return '50px';
    }
    // Minimize
    else if (props.folder.running && props.folder.minimize) {
      return '-100vh';
    }
    // Default
    else {
      return 'calc(40vh - 52px)';
    }
  }};
  left: ${(props) => { /* width is: vw - (left + right )*/
    // Maximize
    if (props.folder.maximize) {
      return '0';
    }
    // Minimize
    else if (props.folder.running && props.folder.minimize) {
      return '50vw';
    }
    // Default
    else {
      return '45vw';
    }
  }};  
  right: ${(props) => {
    // Maximize
    if (props.folder.maximize) {
      return '0';
    }
    // Minimize
    else if (props.folder.running && props.folder.minimize) {
      return '50vw';
    }
    // Default
    else {
      return '5vw';
    }
  }};
  height: ${props => props.folder.maximize ? 'calc(100vh - 52px)' : '60vh' }; /* Screen size - taskbar + frames borders */
  opacity: ${props => props.folder.minimize ? '0' : '1' }; /* Mimic fade in-out */

  /* Border when maximize */
  border: solid 1px ${props =>  props.folder.maximize ? 'transparent': props.theme.accent};
  border-top-left-radius: ${props =>  props.folder.maximize ? 0 : '0.5rem'};
  border-top-right-radius: ${props =>  props.folder.maximize ? 0 : '0.5rem'};

  .type-icon {
    display: flex;
    align-self: center;
    width: 35px;
    height: 35px;
  }

  .arrow-left:hover {
    background-color: ${props => props.theme[props.theme.themeStyle].taskbar.hover}
  }


  .folders-container {
    display: flex;
    padding: 1rem 0.3rem;
    height: 100%;
    flex-wrap: wrap;
    align-content: flex-start;
  }

  .folder-item {
    margin: 0.15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 170px;
    height: 95px;
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
