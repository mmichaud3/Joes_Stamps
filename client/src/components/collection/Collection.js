import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFDCS } from '../../actions/fdc';

// import CollectionItem from './CollectionItem';

const Collection = ({ fdcs, getFDCS }) => {
  useEffect(() => {
    getFDCS();
  }, []);

  // const fdc = fdcs.map((item) => <div key={item._id}>{item.collinsNum} </div>);

  return <Fragment></Fragment>;
};

Collection.propTypes = {
  fdcs: PropTypes.array.isRequired,
  getFDCS: PropTypes.func.isRequired,
};

// export default connect(mapStateToProps, { getFDCS })(Collection);
export default connect(null, { getFDCS })(withRouter(Collection));
