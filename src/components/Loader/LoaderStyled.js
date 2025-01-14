import styled from "styled-components";

const LoaderStyled = styled.div`
  .loader-container {
    width: 100vw;
    height: 100vh;
    background-color: ${(props) =>
      props.theme[props.theme.themeStyle].taskbar.color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .text {
    padding-top: 50px;
    text-align: center;
  }

  .loader {
    color: ${(props) => props.theme[props.theme.themeStyle].text};
    font-size: 10px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    animation: spinning 1.3s infinite linear;
    transform: translateZ(0);
  }

  .button-skip {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    width: 75px;
    height: 30px;
    border-radius: 18px !important;
    border: 1px solid
      ${(props) => props.theme[props.theme.themeStyle].taskbar.color};
    background-color: ${(props) => props.theme[props.theme.themeStyle].text};
    border-radius: 0.5rem;
    text-align: center;
    transition: all 0.2s ease-in-out;
  }

  .button-skip:hover {
    background-color: ${(props) =>
      props.theme[props.theme.themeStyle].taskbar.color};
    border: 1px solid ${(props) => props.theme[props.theme.themeStyle].text};
    color: ${(props) => props.theme[props.theme.themeStyle].text};
  }

  @keyframes spinning {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
        0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
        0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
        2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
        -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }
`;

export default LoaderStyled;
