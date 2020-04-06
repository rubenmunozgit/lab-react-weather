import React, { useContext } from "react";
import moment from "moment-with-locales-es6";
import { LanguageContext } from "../../Context";
import "./Forecast.css";

const renderForecastDay = list => {
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
          <span className="max" style={{ width: `${percent}%` }}>
            {day.max}
          </span>
        </div>
      </div>
    );
  });
};

const Forecast = props => {
  const { list } = props;
  const { lang } = useContext(LanguageContext);
  moment.locale(lang);
  return (
    <div className="Forecast">
      <div className="graphic">{renderForecastDay(list)}</div>
    </div>
  );
};

export default Forecast;
