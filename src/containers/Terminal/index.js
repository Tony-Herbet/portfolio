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

import {
  focusOn,
} from '../../actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  terminal: state.utils.terminal,
  inputValue: state.terminal.inputValue,
  history: state.terminal.history,
  commands: state.terminal.commands,
  path: state.terminal.path,
  filesOpen: state.txtReader.filesOpen,
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
  openTxtFromTerminal: (file) => {
    dispatch(openTxtFromTerminal(file));
  },
  focusFileTab: (name) => {
    dispatch(focusFileTab(name));
  },
  focusOn: (identifier) => {
    dispatch(focusOn(identifier));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Terminal);
