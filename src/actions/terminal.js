// === action types
export const TERMINAL_INPUT_UPDATE = 'TERMINAL_INPUT_UPDATE';
export const CLEAR_INPUT = 'CLEAR_INPUT';
export const PUSH_TERMINAL_HISTORY = 'PUSH_TERMINAL_HISTORY';
export const CLEAR_TERMINAL_HISTORY = 'CLEAR_TERMINAL_HISTORY';
export const PATH_UPDATE = 'PATH_UPDATE';
export const PUSH_CMD_HISTORY = 'PUSH_CMD_HISTORY';
export const UPDATE_ARROW_COUNTER = 'UPDATE_ARROW_COUNTER';

// === action creators
export const terminalInputUpdate = (value) => ({
  type: TERMINAL_INPUT_UPDATE,
  value,
});

export const clearInput = () => ({
  type: CLEAR_INPUT,
});

export const pushTerminalHistory = (value) => ({
  type: PUSH_TERMINAL_HISTORY,
  value,
});

export const clearTerminalHistory = () => ({
  type: CLEAR_TERMINAL_HISTORY,
});

export const pathUpdate = (value) => ({
  type: PATH_UPDATE,
  value,
});

export const pushCmdHistory = (value) => ({
  type: PUSH_CMD_HISTORY,
  value,
});

export const updateArrowCounter = (value) => ({
  type: UPDATE_ARROW_COUNTER,
  value,
});
