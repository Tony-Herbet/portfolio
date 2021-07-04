import { connect } from 'react-redux';
import { closeFileTab } from '../../actions/txtReader';

import TxtReader from '../../components/TxtReader';

// === mapStateToProps
const mapStateToProps = (state) => ({
  txtReader: state.utils.txtReader,
  filesOpen: state.txtReader.filesOpen,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  closeFileTab: (newFiles) => {
    dispatch(closeFileTab(newFiles));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TxtReader);
