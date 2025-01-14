import styled from "styled-components";

const TaskbarStyled = styled.div`
  height: 50px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: ${(props) =>
    props.theme[props.theme.themeStyle].taskbar.color};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2147483647;
  /* remove the background color when selecting */
  ::-moz-selection {
    /* Code for Firefox */
    background: none;
  }
  ::selection {
    background: none;
  }

  .taskbar-icons {
    display: flex;
  }

  .task {
    display: flex;
    margin-left: 0.3rem;
    border-radius: 5px;
    width: 60px;
    justify-content: space-evenly;
  }

  .task-terminal {
    background-color: ${(props) =>
      props.terminal.running && props.terminal.focus
        ? props.theme[props.theme.themeStyle].taskbar.focus
        : "transparent"};
  }

  .task-terminal:hover {
    background-color: ${(props) =>
      props.terminal.running && props.terminal.focus
        ? props.theme[props.theme.themeStyle].taskbar.hoverFocus
        : props.theme[props.theme.themeStyle].taskbar.hover};
  }

  .task-browser {
    background-color: ${(props) =>
      props.browser.running && props.browser.focus
        ? props.theme[props.theme.themeStyle].taskbar.focus
        : "transparent"};
  }

  .task-browser:hover {
    background-color: ${(props) =>
      props.browser.running && props.browser.focus
        ? props.theme[props.theme.themeStyle].taskbar.hoverFocus
        : props.theme[props.theme.themeStyle].taskbar.hover};
  }

  .task-folder {
    background-color: ${(props) =>
      props.folder.running && props.folder.focus
        ? props.theme[props.theme.themeStyle].taskbar.focus
        : "transparent"};
  }

  .task-folder:hover {
    background-color: ${(props) =>
      props.folder.running && props.folder.focus
        ? props.theme[props.theme.themeStyle].taskbar.hoverFocus
        : props.theme[props.theme.themeStyle].taskbar.hover};
  }

  .task-txtReader {
    background-color: ${(props) =>
      props.txtreader.running && props.txtreader.focus
        ? props.theme[props.theme.themeStyle].taskbar.focus
        : "transparent"};
  }

  .task-txtReader:hover {
    background-color: ${(props) =>
      props.txtreader.running && props.txtreader.focus
        ? props.theme[props.theme.themeStyle].taskbar.hoverFocus
        : props.theme[props.theme.themeStyle].taskbar.hover};
  }

  .task-settings {
    background-color: ${(props) =>
      props.settings.running && props.settings.focus
        ? props.theme[props.theme.themeStyle].taskbar.focus
        : "transparent"};
  }

  .task-settings:hover {
    background-color: ${(props) =>
      props.settings.running && props.settings.focus
        ? props.theme[props.theme.themeStyle].taskbar.hoverFocus
        : props.theme[props.theme.themeStyle].taskbar.hover};
  }

  .task-pdf {
    background-color: ${(props) =>
      props.pdf.running && props.pdf.focus
        ? props.theme[props.theme.themeStyle].taskbar.focus
        : "transparent"};
  }

  .task-pdf:hover {
    background-color: ${(props) =>
      props.pdf.running && props.pdf.focus
        ? props.theme[props.theme.themeStyle].taskbar.hoverFocus
        : props.theme[props.theme.themeStyle].taskbar.hover};
  }

  .task-mail {
    background-color: ${(props) =>
      props.mail.running && props.mail.focus
        ? props.theme[props.theme.themeStyle].taskbar.focus
        : "transparent"};
  }

  .task-mail:hover {
    background-color: ${(props) =>
      props.mail.running && props.mail.focus
        ? props.theme[props.theme.themeStyle].taskbar.hoverFocus
        : props.theme[props.theme.themeStyle].taskbar.hover};
  }

  .task-indicator {
    height: 0.5rem;
    width: 0.5rem;
    background-color: ${(props) => props.theme.accent};
    border-radius: 100%;
    align-self: center;
    margin: 0 1px;
  }

  .terminal-indicator {
    visibility: ${(props) => (props.terminal.running ? "visible" : "hidden")};
  }

  .browser-indicator {
    visibility: ${(props) => (props.browser.running ? "visible" : "hidden")};
  }

  .folder-indicator {
    visibility: ${(props) => (props.folder.running ? "visible" : "hidden")};
  }

  .txtReader-indicator {
    visibility: ${(props) => (props.txtreader.running ? "visible" : "hidden")};
  }

  .settings-indicator {
    visibility: ${(props) => (props.settings.running ? "visible" : "hidden")};
  }

  .pdf-indicator {
    visibility: ${(props) => (props.pdf.running ? "visible" : "hidden")};
  }

  .mail-indicator {
    visibility: ${(props) => (props.mail.running ? "visible" : "hidden")};
  }

  .task-icon {
    display: flex;
    align-self: center;
    width: 35px;
    height: 35px;
    padding-right: 0.5rem;
  }

  @media (width < 1024px) {
    .task-terminal {
      display: none;
    }

    .task-folder {
      display: none;
    }

    .task-browser {
      display: none;
    }

    .task-txtReader {
      display: none;
    }

    .task-settings {
      display: none;
    }
  }
`;

export default TaskbarStyled;
