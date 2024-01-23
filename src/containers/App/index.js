import { connect } from 'react-redux';

import App from 'components/App';

// === mapStateToProps
const mapStateToProps = (state) => ({
  theme: state.theme,
  landingIsOpen: state.utils.landingIsOpen,
  loading: state.utils.loading,
});

// === mapDispatchToProps
const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
