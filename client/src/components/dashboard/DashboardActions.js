import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

export const DashboardActions = () => {
  return (
    <Container style={{ marginBottom: '2rem', padding: '0' }}>
      <div class='dash-buttons'>
        <Link to='/edit-profile' class='btn btn-light'>
          <i class='fas fa-user-circle text-primary'></i> Edit Profile
        </Link>
        <Link to='/edit-collection' class='btn btn-light'>
          <i class='far fa-edit text-primary'></i> Edit Collection
        </Link>
      </div>
    </Container>
  );
};
