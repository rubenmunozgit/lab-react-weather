import getMaxMinByDate from './maxMinByDate';
import { timeFormat, sunHours } from './dateFomat';

const transformData = (data) => {
  const [weather, forecast] = data;
  const {
    main: { temp, feels_like, humidity },
    weather: [{ description, id: icon }],
    wind: { speed },
    sys: { country, sunrise, sunset },
    dt,
    name: city,
    coord: { lat, lon },
  } = weather;
  const { list } = forecast;
  return {
    current: {
      temperature: temp.toFixed(1),
      feels_like: feels_like.toFixed(1),
      humidity,
      description,
      icon,
      wiSpeed: speed,
      dt: timeFormat(dt),
    },
    forecast: {
      list: getMaxMinByDate(list),
    },
    system: {
      country,
      city,
      sunHours: {
        sunrise: timeFormat(sunrise),
        sunset: timeFormat(sunset),
        sunHours: sunHours(sunset - sunrise),
      },
      geo: {
        lat,
        lon,
      },
    },
  };
};

export default transformData;
