import "./Toggle.css";
import React from "react";

const Switch = ({ isF, handleToggle }) => {
  return (
      <>
          <span className="mesureLabel">C</span>
          <input
              checked={isF}
              onChange={handleToggle}
              className="react-switch-checkbox"
              id={`react-switch-new`}
              type="checkbox"
          />
          <label className="react-switch-label" htmlFor={`react-switch-new`}>
              <span className={`react-switch-button`}/>
          </label>
          <span className="mesureLabel">F</span>
      </>
  );
};

export default Switch;
