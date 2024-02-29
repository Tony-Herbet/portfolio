import {
  RUNNING_ON,
  RUNNING_OFF,
  MINIMIZE_ON,
  MINIMIZE_OFF,
  MAXIMIZE_CLICKED,
  FOCUS_ON,
  FOCUS_OFF,
  OPEN_TXT_WITH_FILE,
  OPEN_PDF_FROM_FILE,
  CLOSE_LANDING,
  SWITCH_LOADING,
  HANDLE_LANGUAGE_MENU_STATE,
  CHANGE_LANGUAGE,
} from "actions/utils";
import { FOCUS_FILE_TAB } from "actions/txtReader";

const initialState = {
  terminal: {
    running: false,
    minimize: false,
    maximize: false,
    focus: false,
    zIndex: 0,
  },
  browser: {
    running: false,
    minimize: false,
    maximize: false,
    focus: false,
    zIndex: 0,
  },
  folder: {
    running: false,
    minimize: false,
    maximize: false,
    focus: false,
    zIndex: 0,
  },
  txtReader: {
    running: false,
    minimize: false,
    maximize: false,
    focus: false,
    zIndex: 0,
  },
  settings: {
    running: false,
    minimize: false,
    maximize: false,
    focus: false,
    zIndex: 0,
  },
  pdf: {
    running: false,
    minimize: false,
    maximize: false,
    focus: false,
    zIndex: 0,
  },
  mail: {
    running: false,
    minimize: false,
    maximize: false,
    focus: false,
    zIndex: 0,
  },
  zIndexCounter: 0,
  landingIsOpen: true,
  loading: false,
  languageMenuOpen: false,
  language: "FRA",
};

const utils = (state = initialState, action = {}) => {
  // Since it's possible to close/minimize/maximize an app that's not focused
  // Spread everytime the focus change to ensure focus is properly handle
  const allAppsFocusOff = {
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
  };

  switch (action.type) {
    case RUNNING_ON:
      return {
        ...state,
        [action.identifier]: {
          ...state[action.identifier],
          running: true,
          focus: true,
          minimize: false,
        },
      };

    case RUNNING_OFF:
      return {
        ...state,
        ...allAppsFocusOff,
        [action.identifier]: {
          ...state[action.identifier],
          minimize: false,
          running: false,
        },
      };

    case MINIMIZE_ON:
      return {
        ...state,
        ...allAppsFocusOff,
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

    case MAXIMIZE_CLICKED:
      return {
        ...state,
        ...allAppsFocusOff,
        [action.identifier]: {
          ...state[action.identifier],
          maximize: !state[action.identifier].maximize,
        },
      };

    case FOCUS_ON:
      return {
        ...state,
        zIndexCounter: state.zIndexCounter + 1,
        ...allAppsFocusOff,
        [action.identifier]: {
          ...state[action.identifier],
          focus: true,
          running: true,
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

    case OPEN_TXT_WITH_FILE: // Used when txtReader was not open yet (it also add files for txtReader)
    case FOCUS_FILE_TAB: // Used when txtReader is already open (it doesn't add files to txtReader)
      return {
        ...state,
        ...allAppsFocusOff,
        zIndexCounter: state.zIndexCounter + 1,
        txtReader: {
          ...state.txtReader,
          running: true,
          minimize: false,
          focus: true,
          zIndex: state.zIndexCounter + 1,
        },
      };

    case OPEN_PDF_FROM_FILE:
      return {
        ...state,
        ...allAppsFocusOff,
        zIndexCounter: state.zIndexCounter + 1,
        pdf: {
          running: true,
          minimize: false,
          focus: true,
          zIndex: state.zIndexCounter + 1,
        },
      };

    case CLOSE_LANDING:
      return {
        ...state,
        landingIsOpen: false,
      };

    case SWITCH_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    case HANDLE_LANGUAGE_MENU_STATE:
      return {
        ...state,
        languageMenuOpen: action.value,
      };

    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };

    default:
      return state;
  }
};
export default utils;
