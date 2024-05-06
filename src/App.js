import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from './contexts/LanguageContext';
import fetchWeatherData from './servicesClients/getWeatherData';
import Loading from './components/Loading/Loading';
import Current from './components/Current/Current';
import Forecast from './components/Forecast/Forecast';
import Nav from './components/Nav/Nav';
import './styles.css';
import { SettingsContext } from './contexts/SettingsContext';

const App = () => {
  const [state, setState] = useState({
    loading: true,
    weatherData: {
      currentWeather: [],
      forecast: [],
      system: [],
    },
  });

  const { lang } = useContext(LanguageContext);
  const { unit } = useContext(SettingsContext);

  const handleWeather = async () => {
    try {
      const weatherData = await fetchWeatherData(unit, lang);
      setState((prevState) => ({
        ...prevState,
        weatherData,
      }));
    } catch (err) {
      console.log(`there was an error: ${err.code} ; ${err.message}`);
    }
  };

  useEffect(() => {
    const asyncHandler = async () => {
      await handleWeather();
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    };
    asyncHandler();
  }, [unit]);

  const {
    loading,
    weatherData: { currentWeather: current, system, forecast },
  } = state;

  if (loading) {
    return (
      <div className="container-md-fuild bg-info">
        <div className="row row-cols-md-3">
          <div className="col-md-8">
            <Loading />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container-md-fuild bg-info">
      <div className="row row-cols-md-3">
        <div className="col-md-8">
          <Nav />
        </div>
      </div>
      <div className="row row-cols-md-3">
        <div className="col-md-8">
          <Current {...current} {...system} refresh={handleWeather} />
        </div>
      </div>
      <div className="row row-cols-md-3">
        <div className="col-md-8">
          <Forecast {...forecast} />
        </div>
      </div>
    </div>
  );
};
export default App;
