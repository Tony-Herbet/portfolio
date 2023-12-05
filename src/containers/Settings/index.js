import { connect } from 'react-redux';

import Settings from 'components/Settings';

import { focusCategoryTab } from 'actions/settings';
import { changeThemeStyle, changeAccentColor } from 'actions/theme';

// === mapStateToProps
const mapStateToProps = (state) => ({
  settings: state.utils.settings,
  categoryFocused: state.settings.categoryFocused,
  themeStyle: state.theme.themeStyle,
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
