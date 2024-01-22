import styled from 'styled-components';

const LanguageMenuStyled = styled.div`
  width: 60px;
  align-self: center;
  height: 100%;
  margin-right: 0.5rem;

  .languageMenu-language {
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .languageMenu-language:hover {
    background-color: ${props => props.theme[props.theme.themeStyle].taskbar.hover};
    border-radius: 5px;
  }

  .languageMenu-select {
    position: absolute;
    top: 55px;
    right: 0.5rem;
    background-color: ${props => props.theme[props.theme.themeStyle].taskbar.color};
    border: solid 1px ${props => props.theme.accent};
    border-radius: 0.5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    height: 75px;
    justify-content: space-around;
  }

  .languageMenu-option {
    display: flex;
    padding: 0.5rem;
  }

  .languageMenu-option > span {
    width: 40px;
  }

  .languageMenu-option:hover {
    display: flex;
    background-color: ${props => props.theme[props.theme.themeStyle].taskbar.hover};
    border-radius: 5px;
  }

  .selected {
    background-color: ${props => props.theme[props.theme.themeStyle].taskbar.focus};
    border-radius: 5px;
  }

  .selected:hover {
    background-color: ${props => props.theme[props.theme.themeStyle].taskbar.hoverFocus};
  }
`;

export default LanguageMenuStyled;
