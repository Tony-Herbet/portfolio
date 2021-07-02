import { connect } from 'react-redux';

import TxtReader from '../../components/TxtReader';

// === mapStateToProps
const mapStateToProps = (state) => ({
  txtReader: state.utils.txtReader,
});

// === mapDispatchToProps
const mapDispatchToProps = (/* dispatch */) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TxtReader);
