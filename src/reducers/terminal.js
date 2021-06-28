import {
  TERMINAL_INPUT_UPDATE,
  PUSH_HISTORY,
  CLEAR_HISTORY,
  CLEAR_INPUT,
} from '../actions/terminal';

const initialState = {
  inputValue: '',
  id: 1,
  history: [],
  path: 'Projets',
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
      name: 'cd ..',
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

    default: return state;
  }
};

export default terminal;
