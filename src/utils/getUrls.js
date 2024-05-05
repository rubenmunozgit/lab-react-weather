import config from './config';
const getUrls = (coords, metrics, lang) => {
  const weatherUrl = `${config.openWeatherUrl}weather?lat=${coords.lat}&lon=${coords.long}&units=${metrics}&lang=${lang}&appid=${config.openWeatherApiKey}`;
  const forecastUrl = `${config.openWeatherUrl}forecast?lat=${coords.lat}&lon=${coords.long}&units=${metrics}&lang=${lang}&appid=${config.openWeatherApiKey}`;

  return { weatherUrl, forecastUrl };
};

export default getUrls;
