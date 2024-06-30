import React, { useContext } from 'react';
import stringInject from 'stringinject';
import { LanguageContext } from '../../contexts/LanguageContext';
import { units } from '../../utils/units';
import { SettingsContext } from '../../contexts/SettingsContext';

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
  const sunHoursperDay = sunHours.sunHours;

  return (
    <div className="card m-2">
      <div className="card-header text-bg-secondary d-flex justify-content-center align-items-center text-white">
        <h2 className="px-2">{city}</h2>
        <h5 className="pe-2 text-body-secondary">{country}</h5>
        <div className="pt-0 pb-2" onClick={refresh}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-repeat"
            viewBox="0 0 16 16"
          >
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
            <path
              fillRule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
            />
          </svg>
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
            <div>{stringInject(translatedText.sunHours, [sunHoursperDay])}</div>
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
