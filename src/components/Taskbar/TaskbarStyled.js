import styled from 'styled-components';

const TaskbarStyled = styled.div`

  height: 50px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(31, 27, 27, 0.3);
  display: flex;
  flex-direction: row;
  
  .task {
    display: flex;
    margin-left: 0.3rem;
    border-radius: 5px;
    width: 60px;
    justify-content: space-evenly;
  }

  .task:hover {
    background-color: hsl(0, 0%, 100%, 0.2);
  }

  .task-terminal {
    background-color: ${(props) => {
      if (props.terminal.focus) {
        return 'hsl(0, 0%, 100%, 0.2)';
      }
      return 'transparent';
    }};
  }

  .task-browser {
    background-color: ${(props) => {
      if (props.browser.focus) {
        return 'hsl(0, 0%, 100%, 0.2)';
      }
      return 'transparent';
    }};
  }

  .task-folder {
    background-color: ${(props) => {
      if (props.folder.focus) {
        return 'hsl(0, 0%, 100%, 0.2)';
      }
      return 'transparent';
    }};
  }
  
  .task-txtReader {
    background-color: ${(props) => {
      if (props.txtReader.focus) {
        return 'hsl(0, 0%, 100%, 0.2)';
      }
      return 'transparent';
    }};
  }

  .task-settings {
    background-color: ${(props) => {
      if (props.settings.focus) {
        return 'hsl(0, 0%, 100%, 0.2)';
      }
      return 'transparent';
    }};
  }

  .task-pdf {
    background-color: ${(props) => {
      if (props.pdf.focus) {
        return 'hsl(0, 0%, 100%, 0.2)';
      }
      return 'transparent';
    }};
  }

  .task-indicator {
    height: 0.5rem;
    width: 0.5rem;
    background-color: ${props => props.theme.colors.accent};
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
