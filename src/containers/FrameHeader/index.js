import { connect } from 'react-redux';

import FrameHeader from '../../components/FrameHeader';

import {
  focusOn,
  minimizeOn,
  runningOff,
  focusOff,
} from '../../actions/utils';

// === mapStateToProps
const mapStateToProps = () => ({
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  focusOn: (identifier) => {
    dispatch(focusOn(identifier));
  },
  minimizeOn: (identifier) => {
    dispatch(minimizeOn(identifier));
  },
  runningOff: (identifier) => {
    dispatch(runningOff(identifier));
  },
  focusOff: (identifier) => {
    dispatch(focusOff(identifier));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FrameHeader);
