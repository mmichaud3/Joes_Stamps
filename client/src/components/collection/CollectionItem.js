import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CollectionItem = ({ firstDayCover: { scottNum, collinsNum, title } }) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

CollectionItem.propTypes = {
  firstDayCover: PropTypes.object.isRequired,
};

export default CollectionItem;
