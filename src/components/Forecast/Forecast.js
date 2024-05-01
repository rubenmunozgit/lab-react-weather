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
import { getLinearGradient } from "./backgroundColor";

const renderForecastDay = (list, settings) => {
  const max = list
    .map(day => day.max)
    .reduce((a, b) => {
      return Math.max(a, b);
    });
  return list.map(day => {
    const percent = (day.max / max) * 80;

    return (
      <div key={day.date} className="rowDay">
        <h6>{moment(day.date).format("ddd, Do")}</h6>
        <div className="dayForecast">
          <span className="min">{day.min}</span>
          <span className="max" 
            style={{
              width: `${percent}%`,
              background: getLinearGradient(day.max, settings)
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
