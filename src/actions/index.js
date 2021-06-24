// === action types
export const RUNNING_ON = 'RUNNING_ON';
export const RUNNING_OFF = 'RUNNING_OFF';
export const MINIMIZE_ON = 'MINIMIZE_ON';
export const MINIMIZE_OFF = 'MINIMIZE_OFF';
export const FOCUS_ON = 'FOCUS_ON';
export const FOCUS_OFF = 'FOCUS_OFF';

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

export const focusOn = (identifier) => ({
  type: FOCUS_ON,
  identifier,
});

export const focusOff = (identifier) => ({
  type: FOCUS_OFF,
  identifier,
});
