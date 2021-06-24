// === action types
export const TERMINAL_INPUT_UPDATE = 'TERMINAL_INPUT_UPDATE';

// === action creators

export const terminalInputUpdate = (value) => ({
  type: TERMINAL_INPUT_UPDATE,
  value,
});
