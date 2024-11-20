import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { SettingsContext } from '../../contexts/SettingsContext';
import ForecastByDay from './ForecastByDay';

const Forecast = (props) => {
  const { list } = props;
  const { isC } = useContext(SettingsContext);
  return (
    <div className="card m-2">
      <div className="card-body">
        <ForecastByDay {...{ list, isC }} />
      </div>
    </div>
  );
};

export default Forecast;
