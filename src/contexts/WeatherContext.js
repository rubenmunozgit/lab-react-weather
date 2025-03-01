import { createContext } from 'react';
import useFetchWeather from '../hooks/useFetchWeather';

export const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
  const { data, error, isLoading, handleFetchWeather } = useFetchWeather();
  return (
    <WeatherContext.Provider
      value={{ data, error, isLoading, handleFetchWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
