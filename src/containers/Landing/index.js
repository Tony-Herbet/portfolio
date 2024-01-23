import { connect } from 'react-redux';

import Landing from 'components/Landing';

import { closeLanding, switchLoading } from 'actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  language: state.utils.language,
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
