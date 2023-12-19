// === action types
export const CHANGE_THEME_STYLE = 'CHANGE_THEME_STYLE';
export const CHANGE_ACCENT_COLOR = 'CHANGE_ACCENT_COLOR';
export const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND';

// === action creators

export const changeThemeStyle = (themeColor) => ({
  type: CHANGE_THEME_STYLE,
  themeColor,
});

export const changeAccentColor = (newColor) => ({
  type: CHANGE_ACCENT_COLOR,
  newColor,
});

export const changeBackground = (newBackground) => ({
  type: CHANGE_BACKGROUND,
  newBackground,
})
