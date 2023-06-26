import { connect } from 'react-redux';

import Taskbar from 'components/Taskbar';

import {
  runningOn,
  minimizeOn,
  focusOn,
  minimizeOff,
  focusOff,
} from 'actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  terminal: state.utils.terminal,
  browser: state.utils.browser,
  folder: state.utils.folder,
  txtReader: state.utils.txtReader,
  settings: state.utils.settings,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  runningOn: (identifier) => {
    dispatch(runningOn(identifier));
  },
  minimizeOn: (identifier) => {
    dispatch(minimizeOn(identifier));
  },
  focusOn: (identifier) => {
    dispatch(focusOn(identifier));
  },
  minimizeOff: (identifier) => {
    dispatch(minimizeOff(identifier));
  },
  focusOff: (identifier) => {
    dispatch(focusOff(identifier));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Taskbar);
