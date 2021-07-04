import { connect } from 'react-redux';

import Terminal from '../../components/Terminal';

import {
  terminalInputUpdate,
  pushHistory,
  clearHistory,
  clearInput,
  pathUpdate,
  openTxtFromTerminal,
} from '../../actions/terminal';

import {
  focusFileTab,
} from '../../actions/txtReader';

// === mapStateToProps
const mapStateToProps = (state) => ({
  terminal: state.utils.terminal,
  inputValue: state.terminal.inputValue,
  history: state.terminal.history,
  commands: state.terminal.commands,
  path: state.terminal.path,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  terminalInputUpdate: (value) => {
    dispatch(terminalInputUpdate(value));
  },
  pushHistory: (value) => {
    dispatch(pushHistory(value));
  },
  clearHistory: () => {
    dispatch(clearHistory());
  },
  clearInput: () => {
    dispatch(clearInput());
  },
  pathUpdate: (value) => {
    dispatch(pathUpdate(value));
  },
  openTxtFromTerminal: (value) => {
    dispatch(openTxtFromTerminal(value));
  },
  focusFileTab: (name) => {
    dispatch(focusFileTab(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Terminal);
