// === action types
export const CLOSE_FILE_TAB = 'CLOSE_FILE_TAB';

// === action creators

export const closeFileTab = (newFiles) => ({
  type: CLOSE_FILE_TAB,
  newFiles,
});
