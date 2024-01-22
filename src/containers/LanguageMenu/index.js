import { connect } from 'react-redux';

import LanguageMenu from 'components/LanguageMenu';

import { changeLanguage, handleLanguageMenuState } from 'actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  languageMenuOpen: state.utils.languageMenuOpen,
  language: state.utils.language,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  handleLanguageMenuState: (value) => {
    dispatch(handleLanguageMenuState(value));
  },
  changeLanguage: (language) => {
    dispatch(changeLanguage(language));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageMenu);
