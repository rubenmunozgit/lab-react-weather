import { SvgSunHours } from '../svgs/SvgSunHours';
import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { SettingsContext } from '../../contexts/SettingsContext';
import { units } from '../../utils/units';
import { InfoItem } from './InfoItem';
import { WeatherContext } from '../../contexts/WeatherContext';

const ContentInfo = () => {
  const { translatedText } = useContext(LanguageContext);
  const { unit } = useContext(SettingsContext);
  const {
    data: {
      current: { humidity, wiSpeed },
      system: { sunHours },
    },
  } = useContext(WeatherContext);
  const windMetrics = units[unit].speed;

  const content = [
    [
      { label: translatedText.humidity, value: `${humidity}%` },
      { label: translatedText.wind, value: `${wiSpeed} ${windMetrics}` },
    ],
    [
      { label: translatedText.sunrise, value: sunHours.sunrise },
      { label: translatedText.sunset, value: sunHours.sunset },
    ],
  ];

  return (
    <div
      className="position-absolute top-100 end-0 bg-light border border-secondary rounded p-2 z-1"
      style={{ minWidth: '-webkit-max-content' }}
    >
      <div className="d-flex flex-column align-items-center">
        {content.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="d-flex justify-content-center align-items-center"
          >
            {row.map((column, colIdx) => (
              <InfoItem key={colIdx} {...column} />
            ))}
          </div>
        ))}
        <SvgSunHours {...sunHours} />
      </div>
    </div>
  );
};

export default ContentInfo;
