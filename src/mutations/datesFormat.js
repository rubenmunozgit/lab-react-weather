import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const dateFormat = (date) => {
  return dayjs(date).format('YYYY-MM-DD');
};

const timeFormat = (dt) => {
  return dayjs.unix(dt).format('HH:mm:ss');
};

const sunHoursCalculations = (sunrise, sunset) => {
  const sunriseTime = dayjs.unix(sunrise);
  const sunsetTime = dayjs.unix(sunset);
  const sunHoursDiffInHours = sunsetTime.diff(sunriseTime, 'hour', true);
  const differenceInMilliseconds = sunsetTime.diff(sunriseTime);

  const sunHoursStr = dayjs(differenceInMilliseconds).format('HH:mm:ss');
  const sunHoursPct = ((sunHoursDiffInHours / 24) * 100).toFixed(2);

  return {
    sunHoursStr,
    sunHoursPct,
    sunHoursDiffInHours: sunHoursDiffInHours.toFixed(2),
  };
};

const updatedFromNow = (dt) => {
  return dayjs().to(dayjs.unix(dt));
};

export { dateFormat, timeFormat, sunHoursCalculations, updatedFromNow };
