import { CHANGE_THEME_STYLE } from '../actions/theme';

// https://material-theme.com/docs/reference/color-palette/
const initialState = {
  themeStyle: 'dark',
  colors: {
    accent: 'red',
    highlight: '#000000',
    dark: {
      main: '#1a1a1a',
      secondary: '#323232',
      tertiary: '#4d4d4d',
      text: '#d1d5da',
    },
    light: {
      main: '#fafafa',
      secondary: '#e4e5f1',
      tertiary: '#9394a5',
      text: '#040406',
    }
  },
};

const theme = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_THEME_STYLE:
      return {
        ...state,
        themeStyle: action.themeColor
      };

    default: return state;
  }
};
export default theme;
