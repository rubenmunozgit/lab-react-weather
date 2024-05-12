import React, { useContext } from 'react';
import stringInject from 'stringinject';
import { LanguageContext } from '../../contexts/LanguageContext';
import './Current.css';
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
    <div className="Current">
      <div className="Country_City">
        <h2>{`${city}, ${country}`}</h2>
        <button className="btn pt-0 pb-2" onClick={refresh}>
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
        </button>
      </div>
      <div className="Weather">
        <div className="Temp">
          <div className="Temp__Current">{temperature}º</div>
          <div className="Temp__Feels">
            {translatedText.feels_like}: {feels_like}º
          </div>
        </div>

        <div className="Icon">
          <div className="Icon_Image">
            <i className={`owf owf-${icon} owf-8x`} />
          </div>
          <div className="Description">{description}</div>
        </div>
      </div>
      <div className="Details">
        <div className="Humidity">
          {translatedText.humidity}: {humidity}%
        </div>
        <div className="Wind">
          {translatedText.wind}: {wiSpeed} {windMetrics}
        </div>
        <div className="Update">
          {translatedText.updated}: {dt}
        </div>
        <div className="SunHours">
          <div className="extra__sun">
            <div className="extra__sunrise">
              {translatedText.sunrise}: {sunHours.sunrise}
            </div>
            <div className="extra__sunset">
              {translatedText.sunset}: {sunHours.sunset}
            </div>
          </div>
          <div>{stringInject(translatedText.sunHours, [sunHoursperDay])}</div>
        </div>
      </div>
    </div>
  );
};

export default Current;
