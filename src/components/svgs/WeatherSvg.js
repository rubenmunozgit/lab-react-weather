import React from 'react';
import url01d from 'url:./weather_svgs/01d.svg';
import url01n from 'url:./weather_svgs/01n.svg';
import url02d from 'url:./weather_svgs/02d.svg';
import url02n from 'url:./weather_svgs/02n.svg';
import url03 from 'url:./weather_svgs/03.svg';
import url04 from 'url:./weather_svgs/04.svg';
import url09 from 'url:./weather_svgs/09.svg';
import url10d from 'url:./weather_svgs/10d.svg';
import url10n from 'url:./weather_svgs/10n.svg';
import url11 from 'url:./weather_svgs/11.svg';
import url13 from 'url:./weather_svgs/13.svg';
import url50 from 'url:./weather_svgs/50.svg';

const iconMap = {
  '01d': url01d,
  '01n': url01n,
  '02d': url02d,
  '02n': url02n,
  '03d': url03,
  '03n': url03,
  '04d': url04,
  '04n': url04,
  '09d': url09,
  '09n': url09,
  '10d': url10d,
  '10n': url10n,
  '11d': url11,
  '11n': url11,
  '13d': url13,
  '13n': url13,
  '50d': url50,
  '50n': url50,
  // Add other mappings here
};

const WeatherSvg = ({ icon }) => {
  const src = iconMap[icon];

  if (!src) return null;

  return <img src={src} alt={icon} width={100} height={100} />;
};

export default WeatherSvg;
