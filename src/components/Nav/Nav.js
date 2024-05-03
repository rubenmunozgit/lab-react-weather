import React, { useState } from "react";
import Toggle from "../Switch/Toggle";
import "./Nav.css";

const Nav = (props) => {
  const [state, setState] = useState({isExpanded: false})
  const handleOpen = () => {
    const { isExpanded } = state;
    setState({
      isExpanded: !isExpanded
    });
  };

  const { isExpanded } = state;
  const { handleToggleChange, isF } = props;
  return (
      <nav className="Nav">
        <div className="navbar-home">
          <button className="toggle" onClick={handleOpen}>
            ☰
          </button>
        </div>
        <ul className={"navbar-links " + (isExpanded ? "opened" : "")}>
          <li className="navbar-link">
            <Toggle isF={isF} handleToggle={handleToggleChange}/>
          </li>
        </ul>
      </nav>
  );
}
export default Nav;
