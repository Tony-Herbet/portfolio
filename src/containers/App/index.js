import { connect } from 'react-redux';

import App from 'components/App';

import { closeLanding, switchLoading } from 'actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  theme: state.theme,
  landingIsOpen: state.utils.landingIsOpen,
  loading: state.utils.loading,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  closeLanding: () => {
    dispatch(closeLanding());
  },
  switchLoading: () => {
    dispatch(switchLoading())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
