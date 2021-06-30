// === action types
export const TERMINAL_INPUT_UPDATE = 'TERMINAL_INPUT_UPDATE';
export const CLEAR_INPUT = 'CLEAR_INPUT';
export const PUSH_HISTORY = 'PUSH_HISTORY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';
export const PATH_UPDATE = 'PATH_UPDATE';

// === action creators

export const terminalInputUpdate = (value) => ({
  type: TERMINAL_INPUT_UPDATE,
  value,
});

export const clearInput = () => ({
  type: CLEAR_INPUT,
});

export const pushHistory = (value) => ({
  type: PUSH_HISTORY,
  value,
});

export const clearHistory = () => ({
  type: CLEAR_HISTORY,
});

export const pathUpdate = (value) => ({
  type: PATH_UPDATE,
  value,
});
