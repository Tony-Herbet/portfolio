import { connect } from 'react-redux';

import Pdf from 'components/Pdf';

// === mapStateToProps
const mapStateToProps = (state) => ({
  pdf: state.utils.pdf,
});

// === mapDispatchToProps
const mapDispatchToProps = (/* dispatch */) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Pdf);
