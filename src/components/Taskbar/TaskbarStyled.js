import styled from 'styled-components';

const TaskbarStyled = styled.div`

  height: 50px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: ${props => props.theme[props.theme.themeStyle].taskbar.color};
  display: flex;
  flex-direction: row;
  
  .task {
    display: flex;
    margin-left: 0.3rem;
    border-radius: 5px;
    width: 60px;
    justify-content: space-evenly;
  }

  .task-terminal {
    background-color: ${props => props.terminal.focus ? props.theme[props.theme.themeStyle].taskbar.focus : 'transparent'}
  }

  .task-terminal:hover {
    background-color: ${props => props.terminal.focus ? props.theme[props.theme.themeStyle].taskbar.hoverFocus : props.theme[props.theme.themeStyle].taskbar.hover}
  }


  .task-browser {
    background-color: ${props => props.browser.focus ? props.theme[props.theme.themeStyle].taskbar.focus : 'transparent'}
  }

  .task-browser:hover {
    background-color: ${props => props.browser.focus ? props.theme[props.theme.themeStyle].taskbar.hoverFocus : props.theme[props.theme.themeStyle].taskbar.hover}
  }


  .task-folder {
    background-color: ${props => props.folder.focus ? props.theme[props.theme.themeStyle].taskbar.focus : 'transparent'}
  }

  .task-folder:hover {
    background-color: ${props => props.folder.focus ? props.theme[props.theme.themeStyle].taskbar.hoverFocus : props.theme[props.theme.themeStyle].taskbar.hover}
  }
  
  .task-txtReader {
    background-color: ${props => props.txtReader.focus ? props.theme[props.theme.themeStyle].taskbar.focus : 'transparent'}
  }

  .task-txtReader:hover {
    background-color: ${props => props.txtReader.focus ? props.theme[props.theme.themeStyle].taskbar.hoverFocus : props.theme[props.theme.themeStyle].taskbar.hover}
  }

  .task-settings {
    background-color: ${props => props.settings.focus ? props.theme[props.theme.themeStyle].taskbar.focus : 'transparent'}
  }

  .task-settings:hover {
    background-color: ${props => props.settings.focus ? props.theme[props.theme.themeStyle].taskbar.hoverFocus : props.theme[props.theme.themeStyle].taskbar.hover}
  }

  .task-pdf {
    background-color: ${props => props.pdf.focus ? props.theme[props.theme.themeStyle].taskbar.focus : 'transparent'}
  }

  .task-pdf:hover {
    background-color: ${props => props.pdf.focus ? props.theme[props.theme.themeStyle].taskbar.hoverFocus : props.theme[props.theme.themeStyle].taskbar.hover}
  }

  .task-mail {
    background-color: ${props => props.mail.focus ? props.theme[props.theme.themeStyle].taskbar.focus : 'transparent'}
  }

  .task-mail:hover {
    background-color: ${props => props.mail.focus ? props.theme[props.theme.themeStyle].taskbar.hoverFocus : props.theme[props.theme.themeStyle].taskbar.hover}
  }


  .task-indicator {
    height: 0.5rem;
    width: 0.5rem;
    background-color: ${props => props.theme.accent};
    border-radius: 100%;
    align-self: center;
    margin: 0 1px;
  }

  .terminal-indicator {
    visibility: ${(props) => (
      props.terminal.running ? 'visible' : 'hidden'
    )};
  }

  .browser-indicator {
    visibility: ${(props) => (
      props.browser.running ? 'visible' : 'hidden'
    )};
  }

  .folder-indicator {
    visibility: ${(props) => (
      props.folder.running ? 'visible' : 'hidden'
    )};
  }

  .txtReader-indicator {
    visibility: ${(props) => (
      props.txtReader.running ? 'visible' : 'hidden'
    )};
  }

  .settings-indicator {
    visibility: ${(props) => (
      props.settings.running ? 'visible' : 'hidden'
    )};
  }

  .pdf-indicator {
    visibility: ${(props) => (
      props.pdf.running ? 'visible' : 'hidden'
    )};
  }

  .mail-indicator {
    visibility: ${(props) => (
      props.mail.running ? 'visible' : 'hidden'
    )};
  }

  .task-icon {
    display: flex;
    align-self: center;
    width: 35px;
    height: 35px;
    padding-right: 0.5rem;
  }
`;

export default TaskbarStyled;
