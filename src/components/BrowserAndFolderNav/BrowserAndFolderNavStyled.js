import styled from 'styled-components';

const BrowserAndFolderNavStyled = styled.div`

.nav {
    display: flex;
    background-color: ${props => props.theme[props.theme.themeStyle].tertiary};
    border-bottom: ${props => props.theme.frameInsideHeader.borderBottom};
    padding: ${props => props.theme.frameInsideHeader.padding};
    height: ${props => props.theme.frameInsideHeader.height};
  }

  .nav-icons {
    display: flex;
    align-items: center;
    margin: 0 0.2rem;
    width: 120px;
  }

  .nav-icons > *  {
    height: 100%;
    aspect-ratio : 1 / 1;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    margin: 0 5px;
  }

  .adressBar {
    flex-grow: 2;
    border: solid 0.1rem #000000;
    border-radius: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0.2rem;
    margin: 0 0.2rem;
    font-size: small;
  }

  .url {
    margin: 0;
    padding-left: 0.5rem;
    flex-grow: 2;
    cursor: default;
  }

  .browser-url-inside {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .browser-url-inside > * {
    display: flex;
    align-items: center;
  }

  .icon {
    height: 100%;
  }

  .icon-lock {
    margin-right: 0.5rem;
  }

  .icon-star {
    margin-right: 0.5rem;
  }

  .arrow-left:hover {
    background-color: ${props => props.theme[props.theme.themeStyle].taskbar.hover}
  }

  .arrow-left:active {
    background-color: ${props => props.theme[props.theme.themeStyle].taskbar.hoverFocus}
  }
`;

export default BrowserAndFolderNavStyled;
