import {
  RUNNING_ON,
  RUNNING_OFF,
  MINIMIZE_ON,
  MINIMIZE_OFF,
  FOCUS_ON,
  FOCUS_OFF,
} from 'actions/utils';

import {
  OPEN_TXT_FROM_TERMINAL,
  OPEN_PDF_FROM_TERMINAL
} from 'actions/terminal';

const initialState = {
  terminal: {
    running: false,
    minimize: false,
    focus: false,
    zIndex: 0,
  },
  browser: {
    running: false,
    minimize: false,
    focus: false,
    zIndex: 0,
  },
  folder: {
    running: false,
    minimize: false,
    focus: false,
    zIndex: 0,
  },
  txtReader: {
    running: false,
    minimize: false,
    focus: false,
    zIndex: 0,
  },
  settings: {
    running: false,
    minimize: false,
    focus: false,
    zIndex: 0,
  },
  pdf: {
    running: false,
    minimize: false,
    focus: false,
    zIndex: 0,
  },
  mail: {
    running: false,
    minimize: false,
    focus: false,
    zIndex: 0,
  },
  zIndexCounter: 0,
};

const utils = (state = initialState, action = {}) => {
  switch (action.type) {
    case RUNNING_ON:
      return {
        ...state,
        [action.identifier]: {
          ...state[action.identifier],
          running: true,
        },
      };

    case RUNNING_OFF:
      return {
        ...state,
        [action.identifier]: {
          ...state[action.identifier],
          running: false,
        },
      };

    case MINIMIZE_ON:
      return {
        ...state,
        [action.identifier]: {
          ...state[action.identifier],
          minimize: true,
        },
      };

    case MINIMIZE_OFF:
      return {
        ...state,
        [action.identifier]: {
          ...state[action.identifier],
          minimize: false,
        },
      };

    case FOCUS_ON:
      return {
        ...state,
        zIndexCounter: state.zIndexCounter + 1,
        terminal: {
          ...state.terminal,
          focus: false,
        },
        folder: {
          ...state.folder,
          focus: false,
        },
        browser: {
          ...state.browser,
          focus: false,
        },
        txtReader: {
          ...state.txtReader,
          focus: false,
        },
        settings: {
          ...state.settings,
          focus: false,
        },
        pdf: {
          ...state.pdf,
          focus: false,
        },
        mail: {
          ...state.mail,
          focus: false,
        },
        [action.identifier]: {
          ...state[action.identifier],
          focus: true,
          zIndex: state.zIndexCounter + 1,
        },
      };

    case FOCUS_OFF:
      return {
        ...state,
        [action.identifier]: {
          ...state[action.identifier],
          focus: false,
        },
      };

    case OPEN_TXT_FROM_TERMINAL:
      return {
        ...state,
        zIndexCounter: state.zIndexCounter + 1,
        terminal: {
          ...state.terminal,
          focus: false,
        },
        folder: {
          ...state.folder,
          focus: false,
        },
        browser: {
          ...state.browser,
          focus: false,
        },
        txtReader: {
          running: true,
          minimize: false,
          focus: true,
          zIndex: state.zIndexCounter + 1,
        },
        settings: {
          ...state.settings,
          focus: false,
        },
        pdf: {
          ...state.pdf,
          focus: false,
        },
        mail: {
          ...state.mail,
          focus: false,
        },
      };

    case OPEN_PDF_FROM_TERMINAL:
      return {
        ...state,
        zIndexCounter: state.zIndexCounter + 1,
        terminal: {
          ...state.terminal,
          focus: false,
        },
        folder: {
          ...state.folder,
          focus: false,
        },
        browser: {
          ...state.browser,
          focus: false,
        },
        txtReader: {
          ...state.txtReader,
          focus: false,
        },
        settings: {
          ...state.settings,
          focus: false,
        },
        pdf: {
          running: true,
          minimize: false,
          focus: true,
          zIndex: state.zIndexCounter + 1,
        },
        mail: {
          ...state.mail,
          focus: false,
        },
      };

    default: return state;
  }
};
export default utils;
