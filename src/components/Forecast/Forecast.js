import React, { useContext } from 'react';
import moment from 'moment';
import 'moment/locale/es';
import 'moment/locale/it';
import 'moment/locale/fr';
import 'moment/locale/de';
import 'moment/locale/el';
import 'moment/locale/pt';
import 'moment/locale/ru';
import { LanguageContext } from '../../contexts/LanguageContext';
import { SettingsContext } from '../../contexts/SettingsContext';
import ForecastByDay from './ForecastByDay';

const Forecast = (props) => {
  const { list } = props;
  const { lang } = useContext(LanguageContext);
  const { isC } = useContext(SettingsContext);
  moment.locale(lang);
  return (
    <div className="card m-2">
      <div className="card-body">
        <ForecastByDay {...{ list, isC }} />
      </div>
    </div>
  );
};

export default Forecast;
