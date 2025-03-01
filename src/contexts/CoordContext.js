import { createContext } from 'react';
import useBrowserLocation from '../hooks/useBrowserLocation';

export const CoordContext = createContext({ coords: null, error: null });

export const CoordProvider = ({ children }) => {
  const { coords, error } = useBrowserLocation();
  return (
    <CoordContext.Provider value={{ coords, error }}>
      {children}
    </CoordContext.Provider>
  );
};
