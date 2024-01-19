import { connect } from 'react-redux';

import Pdf from 'components/Pdf';

import { focusOn } from 'actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  pdf: state.utils.pdf,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  focusOn: (identifier) => {
    dispatch(focusOn(identifier));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Pdf);
