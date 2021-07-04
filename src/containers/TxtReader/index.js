import { connect } from 'react-redux';
import { closeFileTab, focusFileTab } from '../../actions/txtReader';

import TxtReader from '../../components/TxtReader';

// === mapStateToProps
const mapStateToProps = (state) => ({
  txtReader: state.utils.txtReader,
  filesOpen: state.txtReader.filesOpen,
  tabFocused: state.txtReader.tabFocused,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  closeFileTab: (newFiles) => {
    dispatch(closeFileTab(newFiles));
  },
  focusFileTab: (name) => {
    dispatch(focusFileTab(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TxtReader);
