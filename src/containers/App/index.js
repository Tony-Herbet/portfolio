import { connect } from "react-redux";

import App from "components/App";

import { changeAccentColor, changeBackground } from "actions/theme";

// === mapStateToProps
const mapStateToProps = (state) => ({
  theme: state.theme,
  landingIsOpen: state.utils.landingIsOpen,
  loading: state.utils.loading,
  transition: state.utils.transition,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  changeAccentColor: (newColor) => {
    dispatch(changeAccentColor(newColor));
  },
  changeBackground: (newBackground) => {
    dispatch(changeBackground(newBackground));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
