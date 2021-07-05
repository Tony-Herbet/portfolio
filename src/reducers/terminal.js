import {
  TERMINAL_INPUT_UPDATE,
  PUSH_HISTORY,
  CLEAR_HISTORY,
  CLEAR_INPUT,
  PATH_UPDATE,
  PUSH_CMD_HISTORY,
  UPDATE_ARROW_COUNTER,
} from '../actions/terminal';

const initialState = {
  inputValue: '',
  id: 1,
  history: [],
  path: '',
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
      description: 'Followed by ".." to move up one directory OR a directory name to move to it',
    },
    {
      name: 'open',
      description: 'Followed by a .txt file name will open it',
    },
    {
      name: 'clear',
      description: 'Clear the terminal history',
    },
  ],
  inputHistory: [],
  arrowCounter: 0,
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
        history: [
          ...state.history,
          {
            id: state.id + 1,
            cmd: state.inputValue,
            path: state.path,
            text: action.value,
          },
        ],
        id: state.id + 1,
      };

    case CLEAR_HISTORY:
      return {
        ...state,
        history: [],
      };

    case PATH_UPDATE:
      return {
        ...state,
        path: action.value,
      };

    case PUSH_CMD_HISTORY:
      return {
        ...state,
        inputHistory: [
          ...state.inputHistory,
          action.value,
        ],
      };

    case UPDATE_ARROW_COUNTER:
      return {
        ...state,
        arrowCounter: action.value,
      };

    default: return state;
  }
};

export default terminal;
