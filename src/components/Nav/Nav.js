import React, { useState } from 'react';
import Toggle from '../Switch/Toggle';
import { useNavbarToggle } from '../../hooks/useNavbarToggle';

const Nav = () => {
  const { collapse, toggleNav } = useNavbarToggle();
  const collapseClass = collapse ? 'show' : '';
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-success bg-gradient">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarToggler"
          aria-expanded={collapse}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse collapse ${collapseClass}`}>
          <ul className="navbar-nav me-auto my-2">
            <li className="nav-item d-flex">
              <Toggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
