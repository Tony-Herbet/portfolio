import { connect } from "react-redux";

import FrameHeader from "components/FrameHeader";

import {
  minimizeOn,
  maximizeClicked,
  runningOff,
  changeDragStartValues,
  changeAppAxisValues,
  focusOn,
  toggleTransition,
} from "actions/utils";

// === mapStateToProps
const mapStateToProps = (state) => ({
  utils: state.utils,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  minimizeOn: (identifier) => {
    dispatch(minimizeOn(identifier));
  },
  maximizeClicked: (identifier) => {
    dispatch(maximizeClicked(identifier));
  },
  runningOff: (identifier) => {
    dispatch(runningOff(identifier));
  },
  changeDragStartValues: (values) => {
    dispatch(changeDragStartValues(values));
  },
  changeAppAxisValues: (identifier, values) => {
    dispatch(changeAppAxisValues(identifier, values));
  },
  focusOn: (identifier) => {
    dispatch(focusOn(identifier));
  },
  toggleTransition: (value) => {
    dispatch(toggleTransition(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FrameHeader);
