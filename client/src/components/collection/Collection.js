import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import CollectionItem from './CollectionItem';

const Collection = ({ fdcs }) => {
  const fdc = fdcs.map((item) => <div key={item._id}>{item.collinsNum} </div>);

  return <Fragment>{fdc}</Fragment>;
};

Collection.propTypes = {
  fdcs: PropTypes.array.isRequired,
};

// export default connect(mapStateToProps, { getFDCS })(Collection);
export default Collection;
