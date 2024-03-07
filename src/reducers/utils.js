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
  CHANGE_DRAG_START_VALUES,
  CHANGE_APP_AXIS_VALUES,
  TOGGLE_TRANSITION,
} from "actions/utils";
import { FOCUS_FILE_TAB } from "actions/txtReader";

const initialState = {
  terminal: {
    running: false,
    minimize: false,
    maximize: false,
    focus: false,
    zIndex: 0,
    x: 15,
    y: 100,
    width: 49,
    height: 40,
  },
  browser: {
    running: false,
    minimize: false,
    maximize: false,
    focus: false,
    zIndex: 0,
    x: 275,
    y: 150,
    width: 70,
    height: 70,
  },
  folder: {
    running: false,
    minimize: false,
    maximize: false,
    focus: false,
    zIndex: 0,
    x: 600,
    y: 300,
    width: 50,
    height: 60,
  },
  txtReader: {
    running: false,
    minimize: false,
    maximize: false,
    focus: false,
    zIndex: 0,
    x: 200,
    y: 100,
    width: 80,
    height: 75,
  },
  settings: {
    running: false,
    minimize: false,
    maximize: false,
    focus: false,
    zIndex: 0,
    x: 810,
    y: 65,
    width: 50,
    height: 50,
  },
  pdf: {
    running: false,
    minimize: false,
    maximize: false,
    focus: false,
    zIndex: 0,
    x: 100,
    y: 80,
    width: 40,
    height: 80,
  },
  mail: {
    running: false,
    minimize: false,
    maximize: false,
    focus: false,
    zIndex: 0,
    x: 300,
    y: 270,
    width: 30,
    height: 55,
  },
  zIndexCounter: 0,
  landingIsOpen: true,
  loading: false,
  languageMenuOpen: false,
  language: "FRA",
  dragStart: {
    x: 0,
    y: 0,
  },
  transition: false,
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

    case CHANGE_DRAG_START_VALUES:
      return {
        ...state,
        dragStart: {
          x: action.values.x,
          y: action.values.y,
        },
      };

    case CHANGE_APP_AXIS_VALUES:
      return {
        ...state,
        [action.identifier]: {
          ...state[action.identifier],
          x: action.values.x,
          y: action.values.y,
        },
      };

    case TOGGLE_TRANSITION:
      return {
        ...state,
        transition: action.value,
      };

    default:
      return state;
  }
};
export default utils;
