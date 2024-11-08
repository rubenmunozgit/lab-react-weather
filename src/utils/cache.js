import fetchWeatherData from '../servicesClients/getWeatherData';

const ONE_HOUR = 60 * 60 * 1000;
const memoryCache = {};

const isTtlExpired = (cache, now) => {
  return now >= cache.ttl;
};

const weatherWithCache = async (coords, lang, metrics) => {
  const now = new Date().getTime();
  const key = `${coords.lat},${coords.long},${lang},${metrics}`;

  if (memoryCache[key] && !isTtlExpired(memoryCache[key], now)) {
    return memoryCache[key].data;
  }
  memoryCache[key] = {
    data: await fetchWeatherData(coords, lang, metrics),
    ttl: now + ONE_HOUR,
  };
  if (Object.keys(memoryCache).length > 10) {
    const keys = Object.keys(memoryCache);
    delete memoryCache[keys[0]];
  }
  return memoryCache[key].data;
};

export default weatherWithCache;
