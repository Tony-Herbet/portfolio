import { TERMINAL_INPUT_UPDATE } from '../actions/terminal';

const initialState = {
  inputValue: '',
  history: [
    {
      name: 'test',
    },
  ],
  path: '',
  help: [
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

    default: return state;
  }
};

export default terminal;
