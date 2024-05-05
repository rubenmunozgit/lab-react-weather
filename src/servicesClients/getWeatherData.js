import getCoords from './coordenates';
import getUrls from '../utils/getUrls';
import callApi from './apiCall';
import transformData from '../mutations/weatherData';

const fetchWeatherData = async (metrics, lang) => {
  const position = await getCoords();
  const coords = {
    lat: position.coords.latitude,
    long: position.coords.longitude,
  };
  const openWeatherUrls = getUrls(coords, metrics, lang);
  const weather = await Promise.all([
    callApi(openWeatherUrls.weatherUrl),
    callApi(openWeatherUrls.forecastUrl),
  ]);
  return transformData(weather);
};

export default fetchWeatherData;
