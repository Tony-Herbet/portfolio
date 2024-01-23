import { connect } from 'react-redux';

import Loader from 'components/Loader';

import { switchLoading } from 'actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  language: state.utils.language,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  switchLoading: () => {
    dispatch(switchLoading())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
