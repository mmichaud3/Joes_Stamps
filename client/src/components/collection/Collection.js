import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFDCS } from '../../actions/fdc';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CollectionItem from './CollectionItem';

// import CollectionItem from './CollectionItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Collection = ({ getFDCS, fdcs }) => {
  const classes = useStyles();
  useEffect(() => {
    getFDCS();
  }, []);

  // const fdc = fdcs.map((item) => <div key={item._id}>{item.collinsNum} </div>);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={2}>
          {fdcs !== undefined &&
            fdcs.map((fdc) => (
              <Grid key={fdc.id} item>
                <CollectionItem
                  key={fdc.id}
                  id={fdc._id}
                  scottNum={fdc.scottNum}
                  collinsNum={fdc.collinsNum}
                  title={fdc.title}
                  issueDate={fdc.issueDate}
                  year={fdc.year}
                  description={fdc.description}
                  location={fdc.location}
                  price={fdc.price}
                  value={fdc.value}
                  quantity={fdc.quantity}
                  group={fdc.group}
                  chachetmaker={fdc.chachetmaker}
                  series={fdc.series}
                  denomination={fdc.denomination}
                  format={fdc.format}
                  variety={fdc.variety}
                />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

Collection.propTypes = {
  fdcs: PropTypes.array.isRequired,
  getFDCS: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  fdcs: state.profile.fdcs,
});

// export default connect(mapStateToProps, { getFDCS })(Collection);
export default connect(mapStateToProps, { getFDCS })(withRouter(Collection));
