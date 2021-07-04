// === action types
export const CLOSE_FILE_TAB = 'CLOSE_FILE_TAB';
export const FOCUS_FILE_TAB = 'FOCUS_FILE_TAB';

// === action creators

export const closeFileTab = (newFiles) => ({
  type: CLOSE_FILE_TAB,
  newFiles,
});

export const focusFileTab = (name) => ({
  type: FOCUS_FILE_TAB,
  name,
});
