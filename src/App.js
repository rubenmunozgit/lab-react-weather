import React from "react";
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

export default class App extends React.Component {
  state = {
    loading: true,
    settings: "metric",
    weatherData: {
      currentWeather: [],
      forecast: [],
      system: []
    }
  };

  componentDidMount() {
    const metrics = this.state.settings;
    getCoords()
      .then(position => ({
        lat: position.coords.latitude,
        long: position.coords.longitude
      }))
      .then(coords => {
        const weatherUrl = `${config.openWeatherUrl}weather?lat=${
          coords.lat
        }&lon=${coords.long}&units=${metrics}&lang=${lang}&appid=${
          config.openWeatherApiKey
        }`;

        const forecastUrl = `${config.openWeatherUrl}forecast?lat=${
          coords.lat
        }&lon=${coords.long}&units=${metrics}&lang=${lang}&appid=${
          config.openWeatherApiKey
        }`;

        return Promise.all([callApi(weatherUrl), callApi(forecastUrl)]);
      })
      .then(weather => transformData(weather))
      .then(weatherData => {
        this.setState({
          weatherData,
          loading: false
        });
      })
      .catch(err =>
        console.log(`there was an error: ${err.code} ; ${err.message}`)
      );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.settings !== this.state.settings) {
      this.handleRefresh();
    }
  }

  handleToggle = value => {
    const toggleValue = value.target.checked;
    this.setState({
      settings: toggleValue === true ? "imperial" : "metric"
    });
  };

  handleRefresh = () => {
    const {
      weatherData: {
        system: {
          geo: { lat, lon }
        }
      },
      settings
    } = this.state;
    const weatherUrl = `${
      config.openWeatherUrl
    }weather?lat=${lat}&lon=${lon}&units=${settings}&lang=${lang}&appid=${
      config.openWeatherApiKey
    }`;
    const forecastUrl = `${
      config.openWeatherUrl
    }forecast?lat=${lat}&lon=${lon}&units=${settings}&lang=${lang}&appid=${
      config.openWeatherApiKey
    }`;
    try {
      Promise.all([callApi(weatherUrl), callApi(forecastUrl)])
        .then(weather => transformData(weather))
        .then(weatherData => {
          this.setState({
            weatherData,
            loading: false
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const {
      loading,
      settings,
      weatherData: { currentWeather: current, system, forecast }
    } = this.state;
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
        <div className="grid-container">
          <Nav isF={isF} handleToggleChange={this.handleToggle} />
          <Current
            {...current}
            {...system}
            settings={settings}
            refresh={this.handleRefresh}
          />
          <Forecast {...forecast} />
        </div>
      </LanguageContext.Provider>
    );
  }
}
