import { useContext, useEffect, useState } from 'react';
import fetchWeatherData from '../servicesClients/getWeatherData';
import { LanguageContext } from '../contexts/LanguageContext';
import { SettingsContext } from '../contexts/SettingsContext';
import { CoordContext } from '../contexts/CoordContext';

const useFetchWeather = () => {
  const { lang } = useContext(LanguageContext);
  const { unit } = useContext(SettingsContext);
  const { coords } = useContext(CoordContext);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const asyncHandler = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const weatherData = await fetchWeatherData(coords, lang, unit);
        setData(weatherData);
        setIsLoading(false);
      } catch (error) {
        console.log(`there was an error: ${error.code} ; ${error.message}`);
        setError(error);
      }
    };
    asyncHandler();
  }, [unit, refresh, coords]);

  return {
    isLoading,
    data,
    error,
    setRefresh,
  };
};

export default useFetchWeather;
