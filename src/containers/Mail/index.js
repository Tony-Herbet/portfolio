import { connect } from 'react-redux';

import Mail from 'components/Mail';

// === mapStateToProps
const mapStateToProps = (state) => ({
  mail: state.utils.mail,
});

// === mapDispatchToProps
const mapDispatchToProps = (/* dispatch */) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Mail);
