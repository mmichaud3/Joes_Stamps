import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const EditCollection = () => {
  return (
    <Fragment>
      <h1 className='large text-primary'>Edit Collection</h1>
      <div class='dash-buttons'>
        <Link to='/add-fdc' class='btn btn-light'>
          <i class='fas fa-plus-circle text-primary'></i> Add FDC
        </Link>
        <Link to='/edit-fdc' class='btn btn-light'>
          <i class='far fa-edit text-primary'></i> Edit FDC
        </Link>
      </div>
    </Fragment>
  );
};

export default EditCollection;
