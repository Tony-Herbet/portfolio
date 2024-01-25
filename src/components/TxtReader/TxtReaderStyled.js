import styled from 'styled-components';

const TxtReaderStyled = styled.div`

  display: ${(props) => {
    if (props.txtreader.running) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.txtreader.zIndex};

  /* Mimic resize visual effects */
  top: ${(props) => {
    // Maximize
    if (props.txtreader.maximize) {
      return '50px';
    }
    // Minimize
    else if (props.txtreader.running && props.txtreader.minimize) {
      return '-100vh';
    }
    // Default
    else {
      return 'calc(15vh - 52px)';
    }
  }};
  left: ${(props) => { /* width is: vw - (left + right )*/
    // Maximize
    if (props.txtreader.maximize) {
      return '0';
    }
    // Minimize
    else if (props.txtreader.running && props.txtreader.minimize) {
      return '50vw';
    }
    // Default
    else {
      return '6vw';
    }
  }};  
  right: ${(props) => {
    // Maximize
    if (props.txtreader.maximize) {
      return '0';
    }
    // Minimize
    else if (props.txtreader.running && props.txtreader.minimize) {
      return '50vw';
    }
    // Default
    else {
      return '15vw';
    }
  }};
  height: ${props => props.txtreader.maximize ? 'calc(100vh - 52px)' : '80vh' }; /* Screen size - taskbar + frames borders */
  opacity: ${props => props.txtreader.minimize ? '0' : '1' }; /* Mimic fade in-out */

  /* Border when maximize */
  border: solid 2px ${props =>  props.txtreader.maximize ? 'transparent': props.theme.accent};
  border-top-left-radius: ${props =>  props.txtreader.maximize ? 0 : '0.5rem'};
  border-top-right-radius: ${props =>  props.txtreader.maximize ? 0 : '0.5rem'};

  .txtReader-header {
    display: flex;
    background-color: ${props => props.theme[props.theme.themeStyle].tertiary};
    border-bottom: ${props => props.theme.frameInsideHeader.borderBottom};
    padding: ${props => props.theme.frameInsideHeader.padding};
    height: ${props => props.theme.frameInsideHeader.height};
    align-items: center;
  }

  .menu-options {
    padding: 0.5rem;
    cursor: default;
  }

  .txtReader-content {
    height: 100%;
    padding: 0.5rem;
  }

  .txtReader-tabs {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.2rem;
  }

  .txtReader-tab {
    display: flex;
    align-items: center;
    border-top: solid 2px transparent;
    padding: 0.2rem;
    margin: 0.2rem 0.2rem 0;
    background-color: ${props => props.theme[props.theme.themeStyle].tertiary};
    cursor: default;
  }

  .txtReader-tab:hover {
    background-color: ${props => props.theme[props.theme.themeStyle].taskbar.hover};
  }

  .txtReader-tab:active {
    background-color: ${props => props.theme[props.theme.themeStyle].taskbar.hoverFocus};
  }

  .txtReader-tab_focused {
    border-top: solid 2px ${props => props.theme.accent};
    background-color: ${props => props.theme[props.theme.themeStyle].secondary};
  }

  .tab-icon-container {
    display: flex;
    align-items: center;
    height: 15px;
    width: 15px;
    padding-left: 0.3rem;
  }

  .tab-icon {
    background-color: ${props => props.theme.close};
    border-radius: 100%;
    height: 15px;
    width: 15px;
  }

  .txtReader-content {
    overflow-y: scroll;
    overflow-x: hidden; 
    cursor: default;
  }

`;

export default TxtReaderStyled;
