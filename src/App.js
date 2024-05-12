import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from './contexts/LanguageContext';
import Loading from './components/Loading/Loading';
import Current from './components/Current/Current';
import Forecast from './components/Forecast/Forecast';
import Nav from './components/Nav/Nav';
import './styles.css';

import useFetchWeather from './hooks/useFetchWeather';
import useBrowserLocation from './hooks/useBrowserLocation';
import AccessingLocation from './components/Loading/AccessingLocation';
import AlertLocation from './components/Loading/AlertLocation';
import WeatherApp from './Pages/WeatherApp';
import { CoordContext } from './contexts/CoordContext';

const App = () => {
  const { error, coords } = useContext(CoordContext);

  return (
    <div className="container-md-fuild">
      <div className="row row-cols-md-3 vh-100">
        <div className="col-md-8">
          {error && <AlertLocation />}
          {!coords && !error && <AccessingLocation />}
          {coords && <WeatherApp />}
        </div>
      </div>
    </div>
  );
};
export default App;
