import React, { useState, useEffect } from "react";
import { LanguageContext } from "./Context";
import { translations } from "./translations";
import config from "./utils/config";
import getCoords from "./servicesClients/coordenates";
import callApi from "./servicesClients/weather";
import transformData from "./mutations/weatherData";
import Loading from "./components/Loading/Loading";
import Current from "./components/Current/Current";
import Forecast from "./components/Forecast/Forecast";
import Nav from "./components/Nav/Nav";
import "./styles.css";

const lang = navigator.language ? navigator.language.slice(0, 2) : "en";
const translated = {
  lang,
  translatedText: translations[lang]
};

const App = () => {
  const [state, setState] = useState({
    loading: true,
    settings: "metric",
    weatherData: {
      currentWeather: [],
      forecast: [],
      system: []
    }
  });

  useEffect(() => {
    const metrics = state.settings;
    getCoords()
      .then(position => ({
        lat: position.coords.latitude,
        long: position.coords.longitude
      }))
      .then(coords => {
        const weatherUrl = `${config.openWeatherUrl}weather?lat=${coords.lat}&lon=${coords.long}&units=${metrics}&lang=${lang}&appid=${config.openWeatherApiKey}`;

        const forecastUrl = `${config.openWeatherUrl}forecast?lat=${coords.lat}&lon=${coords.long}&units=${metrics}&lang=${lang}&appid=${config.openWeatherApiKey}`;

        return Promise.all([callApi(weatherUrl), callApi(forecastUrl)]);
      })
      .then(weather => transformData(weather))
      .then(weatherData => {
        setState(prevState => ({
          ...prevState,
          weatherData,
          loading: false
        }));
      })
      .catch(err =>
        console.log(`there was an error: ${err.code} ; ${err.message}`)
      );
  }, [state.settings]);

  const handleToggle = value => {
    const toggleValue = value.target.checked;
    setState(prevState => ({
      ...prevState,
      settings: toggleValue === true ? "imperial" : "metric"
    }));
  };

  const handleRefresh = () => {
    const {
      weatherData: {
        system: {
          geo: { lat, lon }
        }
      },
      settings
    } = state;
    const weatherUrl = `${config.openWeatherUrl}weather?lat=${lat}&lon=${lon}&units=${settings}&lang=${lang}&appid=${config.openWeatherApiKey}`;
    const forecastUrl = `${config.openWeatherUrl}forecast?lat=${lat}&lon=${lon}&units=${settings}&lang=${lang}&appid=${config.openWeatherApiKey}`;

    try {
      Promise.all([callApi(weatherUrl), callApi(forecastUrl)])
        .then(weather => transformData(weather))
        .then(weatherData => {
          setState(prevState => ({
            ...prevState,
            weatherData,
          }));
        });
    } catch (error) {
      console.log(error);
    }
  };

    const {
      loading,
      settings,
      weatherData: { currentWeather: current, system, forecast }
    } = state;
    const isF = settings === "metric" ? false : true;
    if (loading) {
      return (
        <LanguageContext.Provider value={translated}>
          <Loading />
        </LanguageContext.Provider>
      );
    }
    return (
      <LanguageContext.Provider value={translated}>
        <div className="background">
          <div className="grid-container">
            <Nav isF={isF} 
              handleToggleChange={handleToggle} />
            <Current
              {...current}
              {...system}
              settings={settings}
              refresh={handleRefresh}
            />
            <Forecast 
              {...forecast} 
              settings={settings} />
          </div>
        </div>
      </LanguageContext.Provider>
    );
}
export default App;
