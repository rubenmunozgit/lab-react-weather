import { createContext, useState } from 'react';
import { useToggleUnit } from '../hooks/useToggleUnit';
import { units } from '../utils/units';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const { unit, toggleUnit } = useToggleUnit();
  const isC = unit === units.metric.text;

  const settings = {
    unit,
    isC,
    toggleUnit,
  };
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};
