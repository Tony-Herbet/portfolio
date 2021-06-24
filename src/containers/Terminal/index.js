import { connect } from 'react-redux';

import Terminal from '../../components/Terminal';

// === mapStateToProps
const mapStateToProps = (state) => ({
  terminal: state.utils.terminal,
});

// === mapDispatchToProps
const mapDispatchToProps = (/* dispatch */) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Terminal);
