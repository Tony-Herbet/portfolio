import { connect } from 'react-redux';

import Browser from 'components/Browser';

import { focusOn } from 'actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  browser: state.utils.browser,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  focusOn: (identifier) => {
    dispatch(focusOn(identifier));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Browser);
