import React from 'react';
import ForecastByDay from './ForecastByDay';

const Forecast = () => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <ForecastByDay />
      </div>
    </div>
  );
};

export default Forecast;
