import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from './contexts/LanguageContext';
import Loading from './components/Loading/Loading';
import Current from './components/Current/Current';
import Forecast from './components/Forecast/Forecast';
import Nav from './components/Nav/Nav';
import './styles.css';
import { SettingsContext } from './contexts/SettingsContext';
import useFetchWeather from './hooks/useFetchWeather';

const App = () => {
  const { data, error, isLoading, setRefresh } = useFetchWeather();

  return (
    <div className="container-md-fuild bg-info">
      <div className="row row-cols-md-3">
        <div className="col-md-8">
          <Nav />
          {error && (
            <div className="alert alert-danger" role="alert">
              {error.message}
            </div>
          )}
          {isLoading && <Loading />}
          {data && (
            <>
              <Current
                {...data.current}
                {...data.system}
                refresh={setRefresh}
              />
              <Forecast {...data.forecast} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
