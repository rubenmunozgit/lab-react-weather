import React, { useContext } from "react";
import moment from "moment";
import "moment/locale/es";
import "moment/locale/it";
import "moment/locale/fr";
import "moment/locale/de";
import "moment/locale/el";
import "moment/locale/pt";
import "moment/locale/ru";
import { LanguageContext } from "../../Context";
import "./Forecast.css";

const bgColors = {
  burning: "rgba(245, 87, 66, 1)",
  verywarm: "rgba(255, 130, 20, 1)",
  warm: "rgba(240, 216, 0, 1)",
  normal: "rgba(62, 179, 62, 1)",
  cold: "rgba(0, 255, 244, 1)",
  verycold: "rgba(0, 164, 255, 1)"
};

const getTempColor = (temp, metrics) => {
  const MAX_VERYWARN = metrics === "metric" ? 40 : 104;
  const MAX_WARN = metrics === "metric" ? 30 : 86;
  const MAX_NORMAL = metrics === "metric" ? 20 : 68;
  const MAX_COLD = metrics === "metric" ? 10 : 50;
  const MAX_VERYCOLD = metrics === "metric" ? 0 : 32;
  if (temp >= MAX_VERYWARN) {
    return bgColors.burning;
  }
  if (MAX_WARN <= temp && temp < MAX_VERYWARN) {
    return bgColors.verywarm;
  }
  if (MAX_NORMAL <= temp && temp < MAX_WARN) {
    return bgColors.warm;
  }
  if (MAX_COLD <= temp && temp < MAX_NORMAL) {
    return bgColors.normal;
  }
  if (MAX_VERYCOLD <= temp && temp < MAX_COLD) {
    return bgColors.cold;
  }
  if (temp < MAX_VERYCOLD) {
    return bgColors.verycold;
  }
};

const renderForecastDay = (list, settings) => {
  const max = list
    .map(day => day.max)
    .reduce((a, b) => {
      return Math.max(a, b);
    });
  return list.map(day => {
    const percent = (day.max / max) * 80;

    return (
      <div key={day.date} className="row">
        <h6>{moment(day.date).format("ddd, Do")}</h6>
        <div className="dayForecast">
          <span className="min">{day.min}</span>
          <span className="max" 
            style={{
              width: `${percent}%`,
              background: `linear-gradient(90deg, ${getTempColor(
                -2,
                settings
              )} 0%, ${getTempColor(4, settings)} 15%, ${getTempColor(
                day.max,
                settings
              )} 100%)` 
          }}>
            {day.max}
          </span>
        </div>
      </div>
    );
  });
};

const Forecast = props => {
  const { list, settings } = props;
  const { lang } = useContext(LanguageContext);
  moment.locale(lang);
  return (
    <div className="Forecast">
      <div className="graphic">{renderForecastDay(list, settings)}</div>
    </div>
  );
};

export default Forecast;
