import React, { useContext } from 'react';
import stringInject from 'stringinject';
import { LanguageContext } from '../../contexts/LanguageContext';
import { units } from '../../utils/units';
import { SettingsContext } from '../../contexts/SettingsContext';
import { SvgRefresh } from '../svgs/svg-refresh';
import { SvgSunHours } from '../svgs/svg-sun-hours';

const Current = (props) => {
  const { translatedText } = useContext(LanguageContext);
  const { unit } = useContext(SettingsContext);
  const {
    temperature,
    feels_like,
    humidity,
    description,
    icon,
    wiSpeed,
    city,
    country,
    dt,
    sunHours,
    refresh,
  } = props;
  const windMetrics = units[unit].speed;

  return (
    <div className="card m-2">
      <div className="card-header text-bg-secondary text-center text-white">
        <h2 className="d-inline px-2">{city}</h2>
        <h5 className="d-inline pe-2 text-body-secondary">{country}</h5>
        <div className="d-inline px-2" onClick={refresh}>
          <SvgRefresh />
        </div>
      </div>
      <div className="m-2 d-flex">
        <div className="col-6">
          <div className="d-flex flex-column align-items-center">
            <div className="fw-bold fs-1">{temperature}</div>
            <div className="text-body-secondary">
              {translatedText.feels_like}: {feels_like}
            </div>
            <div className="d-flex flex-column flex-sm-row flex-md-column flex-lg-row justify-content-center align-items-center">
              <span className="align-middle p-0 pe-2 fw-normal">
                {translatedText.humidity}: {humidity}%
              </span>
              <span className="align-middle p-0 fw-normal">
                {translatedText.wind}: {wiSpeed} {windMetrics}
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-column align-items-center">
            <i className={`owf owf-${icon} owf-5x`} />
            <div className="text-body-secondary">{description}</div>
            <div className="d-flex flex-column flex-sm-row flex-md-column flex-lg-row justify-content-center align-items-center">
              <span className="align-middle p-0 pe-2 fw-normal">
                {translatedText.sunrise}: {sunHours.sunrise}
              </span>
              <span className="align-middle p-0 pe-2 fw-normal">
                {translatedText.sunset}: {sunHours.sunset}
              </span>
            </div>
            <SvgSunHours {...sunHours} />
          </div>
        </div>
      </div>
      <div className="card-footer">
        {translatedText.updated}: {dt}
      </div>
    </div>
  );
};

export default Current;
