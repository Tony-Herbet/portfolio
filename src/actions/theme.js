// === action types
export const CHANGE_THEME_STYLE = 'CHANGE_THEME_STYLE';

// === action creators

export const changeThemeStyle = (themeColor) => ({
  type: CHANGE_THEME_STYLE,
  themeColor,
});
