import React, { useState, useEffect } from "react";
import { LanguageContext } from "./Context";
import { translations } from "./translations";
import fetchWeatherData from "./servicesClients/getWeatherData";
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

  const handleWeather = async () => {
    try {
      const weatherData= await fetchWeatherData(state.settings, lang);
      setState(prevState => ({
        ...prevState,
        weatherData
      }));
    }
    catch (err) {
      console.log(`there was an error: ${err.code} ; ${err.message}`);
    }
  }

  const handleToggle = ({ target: { checked } }) => {
    setState(prevState => ({
      ...prevState,
      settings: checked ? "imperial" : "metric"
    }));
  };

  useEffect( () => {
    const asyncHandler = async () => {
      await handleWeather();
      setState(prevState => ({
        ...prevState,
        loading: false
      }));
    }
    asyncHandler()
  }, [state.settings]);

  const {
    loading,
    settings,
    weatherData: { currentWeather: current, system, forecast }
  } = state;
  const isF = settings !== "metric";
  if (loading) {
    return (
        <LanguageContext.Provider value={translated}>
          <div className="container-md-fuild bg-success">
            <div className="row row-cols-md-3">
              <div className="col-md-8">
                <Loading/>
              </div>
            </div>
          </div>
        </LanguageContext.Provider>
  );
  }
  return (
    <LanguageContext.Provider value={translated}>
      <div className="container-md-fuild bg-success">
        <div className="row row-cols-md-3">
          <div className="col-md-8">
            <Nav isF={isF}
                 handleToggleChange={handleToggle}/>
          </div>
        </div>
        <div className="row row-cols-md-3">
          <div className="col-md-8">
            <Current
                {...current}
                {...system}
                settings={settings}
                refresh={handleWeather}
            />
          </div>
        </div>
        <div className="row row-cols-md-3">
          <div className="col-md-8">
            <Forecast
                {...forecast}
                settings={settings}/>
          </div>
        </div>
      </div>
    </LanguageContext.Provider>
  );
}
export default App;
