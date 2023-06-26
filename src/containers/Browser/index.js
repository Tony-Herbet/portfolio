import { connect } from 'react-redux';

import Browser from 'components/Browser';

// === mapStateToProps
const mapStateToProps = (state) => ({
  browser: state.utils.browser,
});

// === mapDispatchToProps
const mapDispatchToProps = (/* dispatch */) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Browser);
