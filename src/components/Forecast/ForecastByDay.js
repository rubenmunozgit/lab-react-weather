import { LanguageContext } from '../../contexts/LanguageContext';
import React, { useContext } from 'react';
import moment from 'moment/moment';
import ProgressDayMinMax from './ProgressDayMinMax';

const ForecastByDay = ({ list, isC }) => {
  const { translatedText } = useContext(LanguageContext);

  const tempMax = list.reduce((acc, day) => {
    return Math.max(acc, day.max);
  }, 0);

  const renderAllDays = list.map((day) => {
    const tempRatioOverTempMax = (day.max / tempMax) * 80;
    return (
      <div key={day.date} className="mb-2">
        <h5>
          <small class="text-body-secondary">
            {moment(day.date).format('ddd, Do')}
          </small>
        </h5>
        <ProgressDayMinMax
          {...{
            min: day.min,
            max: day.max,
            percent: tempRatioOverTempMax,
            isC,
          }}
        />
      </div>
    );
  });

  return (
    <>
      <h3>{translatedText.forecast}</h3>
      <div className="d-flex flex-column justify-content-center">
        {renderAllDays}
      </div>
    </>
  );
};

export default ForecastByDay;
