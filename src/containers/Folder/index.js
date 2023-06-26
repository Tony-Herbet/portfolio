import { connect } from 'react-redux';

import Folder from 'components/Folder';

// === mapStateToProps
const mapStateToProps = (state) => ({
  folder: state.utils.folder,
});

// === mapDispatchToProps
const mapDispatchToProps = (/* dispatch */) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Folder);
