import { useCallback, useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { SettingsContext } from '../contexts/SettingsContext';
import { CoordContext } from '../contexts/CoordContext';
import weatherWithCache from '../utils/cache';

const useFetchWeather = () => {
  const { lang } = useContext(LanguageContext);
  const { unit } = useContext(SettingsContext);
  const { coords } = useContext(CoordContext);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchWeather = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setData(null);
    try {
      const weatherData = await weatherWithCache(coords, lang, unit);
      setData(weatherData);
      setIsLoading(false);
    } catch (error) {
      console.log(`there was an error: ${error.code} ; ${error.message}`);
      setError(error);
      setData(null);
    }
  }, [coords, lang, unit]);

  useEffect(() => {
    handleFetchWeather();
  }, [coords, lang, unit]);

  return {
    isLoading,
    data,
    error,
    handleFetchWeather,
  };
};

export default useFetchWeather;
