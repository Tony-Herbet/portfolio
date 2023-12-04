import { connect } from 'react-redux';

import App from 'components/App';

// === mapStateToProps
const mapStateToProps = (state) => ({
  theme: state.theme,
});

// === mapDispatchToProps
const mapDispatchToProps = (/* dispatch */) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
