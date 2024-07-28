const dateFormat = (date) => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

const timeFormat = (dt) => {
  const date = new Date(dt * 1000);
  return date.toLocaleTimeString();
};

const sunHoursCalculations = (sunrise, sunset) => {
  const differenceInMilliseconds = (sunset - sunrise) * 1000;
  const sunHoursDiffInHours = (
    differenceInMilliseconds /
    (1000 * 60 * 60)
  ).toFixed(2);

  const diffDate = new Date(differenceInMilliseconds);
  const sunHoursStr = `${diffDate.getUTCHours()}:${diffDate.getUTCMinutes()}:${diffDate.getUTCSeconds()}`;
  const sunHoursPct = ((sunHoursDiffInHours / 24) * 100).toFixed(2);

  return {
    sunHoursStr,
    sunHoursPct,
    sunHoursDiffInHours,
  };
};

module.exports = { dateFormat, timeFormat, sunHoursCalculations };
