import { useState } from 'react';
import { units } from '../utils/units';

export const useToggleUnit = (initValue = 'metric') => {
  const [unit, setUnit] = useState(initValue);
  const toggleUnit = ({ target: { checked } }) => {
    setUnit(checked ? units.imperial.text : units.metric.text);
  };
  return {
    unit,
    toggleUnit,
  };
};
