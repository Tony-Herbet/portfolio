import styled from 'styled-components';

const BrowserStyled = styled.div`

  display: ${(props) => {
    if (props.browser.running) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.browser.zIndex};

  /* Mimic resize visual effects */
  top: ${(props) => {
    // Maximize
    if (props.browser.maximize) {
      return '50px';
    }
    // Minimize
    else if (props.browser.running && props.browser.minimize) {
      return '-100vh';
    }
    // Default
    else {
      return 'calc(20vh - 52px)';
    }
  }};
  left: ${(props) => { /* width is: vw - (left + right )*/
    // Maximize
    if (props.browser.maximize) {
      return '0';
    }
    // Minimize
    else if (props.browser.running && props.browser.minimize) {
      return '50vw';
    }
    // Default
    else {
      return '20vw';
    }
  }};  
  right: ${(props) => {
    // Maximize
    if (props.browser.maximize) {
      return '0';
    }
    // Minimize
    else if (props.browser.running && props.browser.minimize) {
      return '50vw';
    }
    // Default
    else {
      return '30vw';
    }
  }};
  bottom: ${props => props.browser.maximize ? '0' : '15vh' };
  opacity: ${props => props.browser.minimize ? '0' : '1' }; /* Mimic fade in-out */

  /* Border when maximize */
  border: solid 2px ${props =>  props.browser.maximize ? 'transparent': props.theme.accent};
  border-top-left-radius: ${props =>  props.browser.maximize ? 0 : '0.5rem'};
  border-top-right-radius: ${props =>  props.browser.maximize ? 0 : '0.5rem'};

  .iframe {
    width: 100%;
    height: calc(100% - 30px - 0.3rem /* we remove frameInsideHeader.height and padding */);
  }

  .overlay {
    display: ${props =>  props.browser.focus ? 'none': 'block'}; /* enable/disable the onClick on the iframe */
    position: absolute;
    top: 30px /* frameHeader size, this is important to be able to hover/click on the "-ox" buttons */;
    left: 0;
    right: 0;
    height: 100%;
  }
`;

export default BrowserStyled;
