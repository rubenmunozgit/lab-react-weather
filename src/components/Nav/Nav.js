import React, { Component } from "react";
import Toggle from "../Switch/Toggle";
import "./Nav.css";

class Nav extends Component {
  state = {
    isExpanded: false
  };
  handleOpen = () => {
    const { isExpanded } = this.state;
    this.setState({
      isExpanded: !isExpanded
    });
  };
  render() {
    const { isExpanded } = this.state;
    const { handleToggleChange, isF } = this.props;
    return (
      <nav className="Nav">
        <div className="navbar-home">
          <button className="toggle" onClick={this.handleOpen}>
            ☰
          </button>
        </div>
        <ul className={"navbar-links " + (isExpanded ? "opened" : "")}>
          <li className="navbar-link">
            <Toggle isF={isF} handleToggle={handleToggleChange} />
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
