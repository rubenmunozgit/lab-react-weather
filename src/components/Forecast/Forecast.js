import React from 'react';
import ForecastByDay from './ForecastByDay';

const Forecast = (props) => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <ForecastByDay />
      </div>
    </div>
  );
};

export default Forecast;
