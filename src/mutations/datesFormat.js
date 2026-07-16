import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';

dayjs.extend(relativeTime);
dayjs.extend(duration);

const DATE_FORMAT = 'YYYY-MM-DD';
const TIME_FORMAT = 'HH:mm:ss';

const dateFormat = (value) => {
  const date = dayjs(value);
  return date.isValid() ? date.format(DATE_FORMAT) : '';
};

const timeFormat = (unixSeconds) => {
  const date = dayjs.unix(unixSeconds);
  return date.isValid() ? date.format(TIME_FORMAT) : '';
};

const sunHoursCalculations = (sunriseUnixSeconds, sunsetUnixSeconds) => {
  const sunrise = dayjs.unix(sunriseUnixSeconds);
  const sunset = dayjs.unix(sunsetUnixSeconds);

  if (!sunrise.isValid() || !sunset.isValid() || sunset.isBefore(sunrise)) {
    return {
      sunHoursStr: '',
      sunHoursPct: '0.00',
      sunHoursDiffInHours: '0.00',
    };
  }

  const diffMs = sunset.diff(sunrise);
  const diffDuration = dayjs.duration(diffMs);

  const hours = Math.floor(diffDuration.asHours());
  const minutes = diffDuration.minutes();
  const seconds = diffDuration.seconds();

  const sunHoursStr = [
    String(hours).padStart(2, '0'),
    String(minutes).padStart(2, '0'),
    String(seconds).padStart(2, '0'),
  ].join(':');

  const sunHoursDiffInHours = diffDuration.asHours();
  const sunHoursPct = ((sunHoursDiffInHours / 24) * 100).toFixed(2);

  return {
    sunHoursStr,
    sunHoursPct,
    sunHoursDiffInHours: sunHoursDiffInHours.toFixed(2),
  };
};

const updatedFromNow = (unixSeconds) => {
  const date = dayjs.unix(unixSeconds);
  return date.isValid() ? dayjs().to(date) : '';
};

export { dateFormat, timeFormat, sunHoursCalculations, updatedFromNow };
