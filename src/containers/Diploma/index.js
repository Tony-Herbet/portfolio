import { connect } from 'react-redux';

// import {
//   fetchAdventureSelected,
// } from 'action';

import Diploma from 'components/Page/Pages/Diploma';

// === mapStateToProps
const mapStateToProps = (state) => ({
  diplomas: state.diploma.diplomas,
});

// === mapDispatchToProps
const mapDispatchToProps = () => ({
  // fetchAdventureSelected: (slug) => {
  //   dispatch(fetchAdventureSelected(slug));
});
export default connect(mapStateToProps, mapDispatchToProps)(Diploma);
