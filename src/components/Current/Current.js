import React, { useContext } from "react";
import stringInject from "stringinject";
import { LanguageContext } from "../../Context";
import "./Current.css";

const Current = props => {
  const { translatedText } = useContext(LanguageContext);
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
    settings,
    refresh
  } = props;
  const windMetrics = settings === "metric" ? "m/s" : "mi/h";
  const sunHoursperDay = sunHours.sunHours;

  return (
    <div className="Current">
      <div className="Country_City">
        <h2>{`${city}, ${country}`}</h2>
        <button onClick={refresh}>⟳</button>
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
