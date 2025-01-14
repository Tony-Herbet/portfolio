// === action types
export const RUNNING_ON = "RUNNING_ON";
export const RUNNING_OFF = "RUNNING_OFF";
export const MINIMIZE_ON = "MINIMIZE_ON";
export const MINIMIZE_OFF = "MINIMIZE_OFF";
export const MAXIMIZE_CLICKED = "MAXIMIZE_CLICKED";
export const FOCUS_ON = "FOCUS_ON";
export const FOCUS_OFF = "FOCUS_OFF";
export const OPEN_TXT_WITH_FILE = "OPEN_TXT_WITH_FILE";
export const OPEN_PDF_FROM_FILE = "OPEN_PDF_FROM_FILE";
export const CLOSE_LANDING = "CLOSE_LANDING";
export const SWITCH_LOADING = "SWITCH_LOADING";
export const HANDLE_LANGUAGE_MENU_STATE = "HANDLE_LANGUAGE_MENU_STATE";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const CHANGE_DRAG_START_VALUES = "CHANGE_DRAG_START_VALUES";
export const CHANGE_APP_AXIS_VALUES = "CHANGE_APP_AXIS_VALUES";
export const TOGGLE_TRANSITION = "TOGGLE_TRANSITION";

// === action creators
export const runningOn = (identifier) => ({
  type: RUNNING_ON,
  identifier,
});

export const runningOff = (identifier) => ({
  type: RUNNING_OFF,
  identifier,
});

export const minimizeOn = (identifier) => ({
  type: MINIMIZE_ON,
  identifier,
});

export const minimizeOff = (identifier) => ({
  type: MINIMIZE_OFF,
  identifier,
});

export const maximizeClicked = (identifier) => ({
  type: MAXIMIZE_CLICKED,
  identifier,
});

export const focusOn = (identifier) => ({
  type: FOCUS_ON,
  identifier,
});

export const focusOff = (identifier) => ({
  type: FOCUS_OFF,
  identifier,
});

export const openTxtWithFile = (value) => ({
  type: OPEN_TXT_WITH_FILE,
  value,
});

export const openPdfWithFile = () => ({
  type: OPEN_PDF_FROM_FILE,
});

export const closeLanding = () => ({
  type: CLOSE_LANDING,
});

export const switchLoading = (value) => ({
  type: SWITCH_LOADING,
  value,
});

export const handleLanguageMenuState = (value) => ({
  type: HANDLE_LANGUAGE_MENU_STATE,
  value,
});

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  language,
});

export const changeDragStartValues = (values) => ({
  type: CHANGE_DRAG_START_VALUES,
  values,
});

export const changeAppAxisValues = (identifier, values) => ({
  type: CHANGE_APP_AXIS_VALUES,
  identifier,
  values,
});

export const toggleTransition = (value) => ({
  type: TOGGLE_TRANSITION,
  value,
});
