import React, { useContext } from 'react';
import dayjs from 'dayjs';
import { LanguageContext } from '../../contexts/LanguageContext';
import ProgressDayMinMax from './ProgressDayMinMax';
import { WeatherContext } from '../../contexts/WeatherContext';

const createGetPercent = (min, max) => {
  const WIDTH = 80;
  return (value) => {
    if (min === null || max === null) return 0;
    if (min === max) return width;
    return ((value - min) / (max - min)) * WIDTH;
  };
};

const ForecastByDay = () => {
  const { translatedText } = useContext(LanguageContext);
  const {
    data: {
      forecast: { list },
    },
  } = useContext(WeatherContext);

  const allTemps = list.flatMap(({ min, max }) => [min, max]);
  const globalMin = allTemps.length ? Math.min(...allTemps) : null;
  const globalMax = allTemps.length ? Math.max(...allTemps) : null;

  const getPercent = createGetPercent(globalMin, globalMax);

  return (
    <>
      <h3>{translatedText.forecast}</h3>
      <div className="d-flex flex-column justify-content-center">
        {list.map(({ date, min, max }) => (
          <div key={date} className="mb-2">
            <h5>
              <small className="text-body-secondary">
                {dayjs(date).format('ddd, DD')}
              </small>
            </h5>
            <ProgressDayMinMax
              min={min}
              max={max}
              percent={getPercent(max)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ForecastByDay;
