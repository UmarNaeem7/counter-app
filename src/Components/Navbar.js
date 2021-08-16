/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function Navbar({ value }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#!">
            Navbar
          </a>
          <span style={{ marginRight: '95%' }} className="badge bg-primary">
            {value}
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
