import { connect } from 'react-redux';

import FrameHeader from 'components/FrameHeader';

import {
  minimizeOn,
  maximizeClicked,
  runningOff,
  focusOff,
} from 'actions/utils';

// === mapStateToProps
const mapStateToProps = () => ({
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  minimizeOn: (identifier) => {
    dispatch(minimizeOn(identifier));
  },
  maximizeClicked: (identifier) => {
    dispatch(maximizeClicked(identifier))
  },
  runningOff: (identifier) => {
    dispatch(runningOff(identifier));
  },
  focusOff: (identifier) => {
    dispatch(focusOff(identifier));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FrameHeader);
