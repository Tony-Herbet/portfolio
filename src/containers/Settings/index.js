import { connect } from 'react-redux';

import Settings from 'components/Settings';

import { focusCategoryTab } from 'actions/settings';
import { changeThemeStyle, changeAccentColor, changeBackground } from 'actions/theme';
import { focusOn } from 'actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  settings: state.utils.settings,
  categoryfocused : state.settings.categoryfocused ,
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
  },
  focusOn: (identifier) => {
    dispatch(focusOn(identifier));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
