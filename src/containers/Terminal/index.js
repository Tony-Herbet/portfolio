import { connect } from 'react-redux';

import Terminal from '../../components/Terminal';

import { terminalInputUpdate } from '../../actions/terminal';

// === mapStateToProps
const mapStateToProps = (state) => ({
  terminal: state.utils.terminal,
  inputValue: state.terminal.inputValue,
  history: state.terminal.history,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  terminalInputUpdate: (value) => {
    dispatch(terminalInputUpdate(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Terminal);
