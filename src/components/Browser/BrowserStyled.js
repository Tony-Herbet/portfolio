import styled from 'styled-components';

const BrowserStyled = styled.div`

  display: ${(props) => {
    if (props.browser.running && !props.browser.minimize) {
      return 'flex';
    }
    return 'none';
  }};


  z-index: ${(props) => props.browser.zIndex};

  /* Position when maximize */
  top: ${props => props.browser.maximize ? '50px' : '80px' };
  right: ${props => props.browser.maximize ? '0' : '0.8rem' };
  left: ${props => props.browser.maximize ? '0' : '0.8rem' };
  height: ${props => props.browser.maximize ? 'calc(100vh - 52px)' : '450px' }; /* Screen size - taskbar + frames borders */

  /* Border when maximize */
  border: solid 1px ${props =>  props.browser.maximize ? 'transparent': props.theme.accent};
  border-top-left-radius: ${props =>  props.browser.maximize ? 0 : '0.5rem'};
  border-top-right-radius: ${props =>  props.browser.maximize ? 0 : '0.5rem'};

  .iframe {
    width: 100%;
    height: calc(100% - 30px - 0.3rem /* we remove frameInsideHeader.height and padding */);
    transform: translateZ(0);
  }
`;

export default BrowserStyled;
