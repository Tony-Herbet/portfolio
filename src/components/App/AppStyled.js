import styled from "styled-components";

const AppStyled = styled.div`
  font-family: sans-serif;
  margin: 0;
  background-image: url(${(props) =>
    props.handleCurrentBackground(props.theme.background)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100%;
  max-height: 100%;
  min-width: 100%;
  max-width: 100%;
  cursor: default;

  .frame-container {
    background-color: ${(props) => props.theme[props.theme.themeStyle].main};
    /*
      Transition is use to mimic the effect of maximizing a window.
      Can do a transition with display and if it's always display to use opacity there is an overlap issue that prevent clicks
    */
    transition: all ease-in ${(props) => (props.transition ? "0.15s" : "0.05s")}; /* The props is use to disable the transition when dragging a window so there is no "delay". But after testing a minimal amount of transition is require to have a smoother movement */
    flex-direction: column;
    position: absolute;
  }

  .frame-inside {
    background-color: ${(props) =>
      props.theme[props.theme.themeStyle].secondary};
    height: 100%;
    margin: 0.3rem;
    display: flex;
    flex-direction: column;
    max-height: calc(100% - 43px);
  }

  .app {
    color: ${(props) => props.theme[props.theme.themeStyle].text};
  }
`;

export default AppStyled;
