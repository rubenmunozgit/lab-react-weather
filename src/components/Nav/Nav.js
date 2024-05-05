import React, { useState } from 'react';
import Toggle from '../Switch/Toggle';
import './Nav.css';

const Nav = () => {
  const [state, setState] = useState({ isExpanded: false });
  const handleOpen = () => {
    const { isExpanded } = state;
    setState({
      isExpanded: !isExpanded,
    });
  };

  const { isExpanded } = state;
  return (
    <nav className="Nav">
      <div className="navbar-home">
        <button className="toggle" onClick={handleOpen}>
          ☰
        </button>
      </div>
      <ul className={'navbar-links ' + (isExpanded ? 'opened' : '')}>
        <li className="navbar-link">
          <Toggle />
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
