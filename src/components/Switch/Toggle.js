import React, { useContext } from 'react';
import { SettingsContext } from '../../contexts/SettingsContext';
import { units } from '../../utils/units';

const Switch = () => {
  const { isC, toggleUnit } = useContext(SettingsContext);
  return (
    <>
      <span className="align-top text-white py-1">{units.metric.temp}</span>
      <div className="form-check form-switch pt-1">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="switchUnits"
          checked={!isC}
          onChange={toggleUnit}
        />
      </div>
      <span className="align-top text-white py-1">{units.imperial.temp}</span>
    </>
  );
};

export default Switch;
