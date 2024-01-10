import styled from 'styled-components';

const LandingStyled = styled.div`

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${props => props.theme[props.theme.themeStyle].taskbar.color};
  display: flex;
  justify-content: center;
  align-items: center;

  .landing-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .landing-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .landing-content > button {
    width: 100px;
    height: 30px;
    border-radius: 18px;
    border: 1px solid ${props => props.theme[props.theme.themeStyle].taskbar.color};
    background-color: ${props => props.theme[props.theme.themeStyle].text};
  }

  .landing-content > button:hover {
    cursor: pointer;
    background-color: ${props => props.theme[props.theme.themeStyle].taskbar.color};
    border: 1px solid ${props => props.theme[props.theme.themeStyle].text};
    color: ${props => props.theme[props.theme.themeStyle].text}
  }
`;

export default LandingStyled;
