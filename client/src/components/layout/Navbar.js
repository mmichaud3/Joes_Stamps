import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>
        <a href='index.html'>FDC Collector</a>
      </h1>
      <ul>
        <li>
          <a href='profiles.html'>Collectors</a>
        </li>
        <li>
          <a href='register.html'>Register</a>
        </li>
        <li>
          <a href='login.html'>Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
