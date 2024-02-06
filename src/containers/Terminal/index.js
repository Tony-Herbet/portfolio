import { connect } from 'react-redux';

import Terminal from 'components/Terminal';

import {
  terminalInputUpdate,
  pushTerminalHistory,
  clearTerminalHistory,
  clearInput,
  pathUpdate,
  pushCmdHistory,
  updateArrowCounter,
} from 'actions/terminal';

import { focusFileTab } from 'actions/txtReader';

import { 
  focusOn,
  openTxtWithFile,
  openPdfWithFile,
} from 'actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  terminal: state.utils.terminal,
  inputValue: state.terminal.inputValue,
  terminalHistory: state.terminal.terminalHistory,
  commands: state.terminal.commands,
  path: state.terminal.path,
  filesOpen: state.txtReader.filesOpen,
  cmdHistory: state.terminal.cmdHistory,
  arrowCounter: state.terminal.arrowCounter,
  data: state.data,
  language: state.utils.language,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  terminalInputUpdate: (value) => {
    dispatch(terminalInputUpdate(value));
  },
  pushTerminalHistory: (value) => {
    dispatch(pushTerminalHistory(value));
  },
  clearTerminalHistory: () => {
    dispatch(clearTerminalHistory());
  },
  clearInput: () => {
    dispatch(clearInput());
  },
  pathUpdate: (value) => {
    dispatch(pathUpdate(value));
  },
  openTxtWithFile: (file) => {
    dispatch(openTxtWithFile(file));
  },
  openPdfWithFile: () => {
    dispatch(openPdfWithFile());
  },
  focusFileTab: (name) => {
    dispatch(focusFileTab(name));
  },
  focusOn: (identifier) => {
    dispatch(focusOn(identifier));
  },
  pushCmdHistory: (value) => {
    dispatch(pushCmdHistory(value));
  },
  updateArrowCounter: (value) => {
    dispatch(updateArrowCounter(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Terminal);
