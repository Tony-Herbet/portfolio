import styled from 'styled-components';

const BrowserStyled = styled.div`

  display: ${(props) => {
    if (props.browser.running && !props.browser.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.browser.zIndex};

  .browser-header {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;
  }

  .browser-window {
    background-color: #FFFFFF;
    height: 100%;
    margin: 0.2rem;
    display: flex;
    flex-direction: column;
  }
  
  .browser-window_nav {
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

  .video {
    width: 100%;
  }
`;

export default BrowserStyled;
