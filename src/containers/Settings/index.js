import { connect } from 'react-redux';

import Settings from 'components/Settings';

import { focusCategoryTab } from 'actions/settings';
import { changeThemeStyle, changeAccentColor, changeBackground } from 'actions/theme';

// === mapStateToProps
const mapStateToProps = (state) => ({
  settings: state.utils.settings,
  categoryFocused: state.settings.categoryFocused,
  themeStyle: state.theme.themeStyle,
  background: state.theme.background,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  focusCategoryTab: (id) => {
    dispatch(focusCategoryTab(id));
  },
  changeThemeStyle: (themeColor) => {
    dispatch(changeThemeStyle(themeColor))
  },
  changeAccentColor: (newColor) => {
    dispatch(changeAccentColor(newColor))
  },
  changeBackground: (newBackground) => {
    dispatch(changeBackground(newBackground))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
