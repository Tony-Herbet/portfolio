import {
  CHANGE_THEME_STYLE,
  CHANGE_ACCENT_COLOR,
  CHANGE_BACKGROUND,
} from "../actions/theme";

// https://material-theme.com/docs/reference/color-palette/
const initialState = {
  themeStyle: "dark",
  accent: "#b80000",
  border: "#000000",
  close: "#b80000",
  error: "#c63232",
  success: "#5cb85c",
  dark: {
    main: "#1A1A1A",
    secondary: "#323232",
    tertiary: "#4D4D4D",
    /* quarternary: '#2A2A2A', unused for now */
    text: "#D1D5DA",
    taskbar: {
      color: "#323232",
      hover: "hsl(0, 0%, 100%, 0.2)",
      focus: "hsl(0, 0%, 100%, 0.3)",
      hoverFocus: "hsl(0, 0%, 100%, 0.4)",
    },
  },
  light: {
    main: "#FAFAFA",
    secondary: "#E4E5F1",
    tertiary: "#9394A5",
    /* quarternary: '#EDF1F5', unused for now */
    text: "#040406",
    taskbar: {
      color: "#E4E5F1",
      hover: "hsl(0, 0%, 0%, 0.2)",
      focus: "hsl(0, 0%, 0%, 0.3)",
      hoverFocus: "hsl(0, 0%, 0%, 0.4)",
    },
  },
  terminal: {
    background: "#2C001E",
    text: "#ffffff",
    prefixName: "#73D216",
    prefixPathAndFolder: "#3465A4",
    prefixSpacer: "#FFD700",
  },
  background: "background1",
  frameInsideHeader: {
    borderBottom: "solid 1px #000000",
    padding: "0.3rem 0.1rem",
    height: "30px",
  },
};

const theme = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_THEME_STYLE:
      return {
        ...state,
        themeStyle: action.themeColor,
      };

    case CHANGE_ACCENT_COLOR:
      window.localStorage.setItem("accent", action.newColor);

      return {
        ...state,
        accent: action.newColor,
      };

    case CHANGE_BACKGROUND:
      window.localStorage.setItem("background", action.newBackground);

      return {
        ...state,
        background: action.newBackground,
      };

    default:
      return state;
  }
};
export default theme;
