import { connect } from 'react-redux';

import Settings from '../../components/Settings';

// === mapStateToProps
const mapStateToProps = (state) => ({
  settings: state.utils.settings,
});

// === mapDispatchToProps
const mapDispatchToProps = (/* dispatch */) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
