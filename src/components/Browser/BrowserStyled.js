import styled from 'styled-components';

const BrowserStyled = styled.div`

  display: ${(props) => {
    if (props.browser.running && !props.browser.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  top: ${props => props.browser.maximize ? '50px' : '80px' };
  right: ${props => props.browser.maximize ? '0' : '0.8rem' };
  left: ${props => props.browser.maximize ? '0' : '0.8rem' };
  height: ${props => props.browser.maximize ? 'calc(100vh - 50px)' : '450px' };

  z-index: ${(props) => props.browser.zIndex};

  .browser-nav {
    display: flex;
    background-color: #AEA79F;
    border-bottom: solid 1px #000000;
    padding: 0.3rem 0.1rem;
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

  .iframe {
    width: 100%;
    height: 100%;
    transform: translateZ(0);
  }
`;

export default BrowserStyled;
