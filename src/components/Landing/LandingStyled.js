import styled from "styled-components";

const LandingStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${(props) =>
    props.theme[props.theme.themeStyle].taskbar.color};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .landing-title {
    font-size: 2rem;
    margin-bottom: 0.5em;
    font-weight: bold;
  }

  .landing-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
  }

  .landing-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .landing-text > p {
    margin-block-start: 1rem;
    margin-block-end: 1rem;
  }

  .landing-content > button {
    width: 100px;
    height: 30px;
    border-radius: 18px;
    border: 1px solid
      ${(props) => props.theme[props.theme.themeStyle].taskbar.color};
    background-color: ${(props) => props.theme[props.theme.themeStyle].text};
    margin-top: 1rem;
    transition: all 0.2s ease-in-out;
  }

  .landing-content > button:hover {
    background-color: ${(props) =>
      props.theme[props.theme.themeStyle].taskbar.color};
    border: 1px solid ${(props) => props.theme[props.theme.themeStyle].text};
    color: ${(props) => props.theme[props.theme.themeStyle].text};
  }

  .language-container {
    height: 50px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: flex-end;
  }

  @media (width < 1024px) {
    font-size: 14px;
    /* https://stackoverflow.com/a/72245072/4773272 */
    height: 100dvh;

    .landing-title {
      margin-top: 50px;
      font-size: 1.5rem;
      margin-bottom: 0.3em;
    }

    .landing-content {
      padding: 0.25em 0.5em;
    }
  }
`;

export default LandingStyled;
