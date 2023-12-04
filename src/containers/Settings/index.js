import { connect } from 'react-redux';

import Settings from 'components/Settings';

import { focusCategoryTab } from 'actions/settings';
import { changeThemeStyle } from 'actions/theme';

// === mapStateToProps
const mapStateToProps = (state) => ({
  settings: state.utils.settings,
  categoryFocused: state.settings.categoryFocused,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  focusCategoryTab: (id) => {
    dispatch(focusCategoryTab(id));
  },
  changeThemeStyle: (themeColor) => {
    dispatch(changeThemeStyle(themeColor))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
