import config from './config';
const getUrls = (coords, metrics, lang) => {
  const { lat, long } = coords;
  const weatherUrl = `${config.openWeatherUrl}weather?lat=${lat}&lon=${long}&units=${metrics}&lang=${lang}&appid=${config.openWeatherApiKey}`;
  const forecastUrl = `${config.openWeatherUrl}forecast?lat=${lat}&lon=${long}&units=${metrics}&lang=${lang}&appid=${config.openWeatherApiKey}`;

  return { weatherUrl, forecastUrl };
};

export default getUrls;
