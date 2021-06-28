import {
  TERMINAL_INPUT_UPDATE,
  PUSH_HISTORY,
  CLEAR_HISTORY,
  CLEAR_INPUT,
  CMD_NOT_FOUND,
} from '../actions/terminal';

const initialState = {
  inputValue: '',
  id: 1,
  history: [
    {
      id: 1,
      cmd: 'test',
      text: 'fdsfsdfsdfds dsfsdfsd',
      path: '/test/test',
    },
  ],
  path: '/test/base',
  commands: [
    {
      name: 'help',
      description: 'List all the commands',
    },
    {
      name: 'ls',
      description: 'List the files and folders in the current directory',
    },
    {
      name: 'cd',
      description: 'Change directory',
    },
    {
      name: 'clear',
      description: 'Clear the terminal history',
    },
  ],
};

const terminal = (state = initialState, action = {}) => {
  switch (action.type) {
    case TERMINAL_INPUT_UPDATE:
      return {
        ...state,
        inputValue: action.value,
      };

    case CLEAR_INPUT:
      return {
        ...state,
        inputValue: '',
      };

    case PUSH_HISTORY:
      return {
        ...state,
        id: state.id + 1,
        // TODO
      };

    case CMD_NOT_FOUND:
      return {
        ...state,
        history: [
          ...state.history,
          {
            id: state.id + 1,
            cmd: state.inputValue,
            text: `Command '${[state.inputValue]}' not found, type 'help' to see all the commands`,
            path: state.path,
          },
        ],
        id: state.id + 1,
      };

    case CLEAR_HISTORY:
      return {
        ...state,
        history: [],
      };

    default: return state;
  }
};

export default terminal;
