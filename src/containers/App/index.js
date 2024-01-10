import { connect } from 'react-redux';

import App from 'components/App';

import { closeLanding } from 'actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  theme: state.theme,
  landingIsOpen: state.utils.landingIsOpen,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  closeLanding: () => {
    dispatch(closeLanding());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
