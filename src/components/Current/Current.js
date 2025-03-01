import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { SvgRefresh } from '../svgs/SvgRefresh';
import WeatherSvg from '../svgs/WeatherSvg';
import { Tooltip } from '../Tooltip/Tooltip';
import { TooltipContent } from '../Tooltip/TooltipContent';
import { WeatherContext } from '../../contexts/WeatherContext';

const Current = (props) => {
  const { translatedText } = useContext(LanguageContext);
  const {
    data: {
      current: { temperature, feels_like, description, icon, dt },
      system: { city, country },
    },
    handleFetchWeather,
  } = useContext(WeatherContext);

  return (
    <div className="card m-2">
      <div className="card-header text-bg-secondary text-center text-white">
        <h2 className="d-inline px-2">{city}</h2>
        <h5 className="d-inline pe-2 text-body-secondary">{country}</h5>
        <div className="d-inline px-2" onClick={handleFetchWeather}>
          <SvgRefresh />
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center align-items-center">
          <WeatherSvg icon={icon} />
          <div className="d-flex flex-column align-items-start">
            <div className="fw-bold fs-1">{temperature}</div>
            <div className="d-inline-flex align-baseline">
              <div className="text-body-secondary">
                {translatedText.feels_like}: {feels_like}
              </div>
              <Tooltip>
                <TooltipContent />
              </Tooltip>
            </div>
            <div className="text-body-secondary">{description}</div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        {translatedText.updated.replace('{0}', dt)}
      </div>
    </div>
  );
};

export default Current;
