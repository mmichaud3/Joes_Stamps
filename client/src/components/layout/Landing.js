import React from 'react';
import Button from '@material-ui/core/Button';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='landing-overlay'>
        <div className='landing-inner'>
          <h1 className=''>FDC Collectors</h1>
          <p className=''>
            Create a profile to start building your collection.
          </p>
          <div className='landing-buttons'>
            <Button variant='contained' href='/register'>
              Register
            </Button>
            <Button variant='contained' href='/login'>
              Login
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
