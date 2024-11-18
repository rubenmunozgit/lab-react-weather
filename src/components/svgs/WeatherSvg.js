import React, { Suspense, lazy } from 'react';

const iconMap = {
  '01d': lazy(() =>
    import('./weather_svgs/01d.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '01n': lazy(() =>
    import('./weather_svgs/01n.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '02d': lazy(() =>
    import('./weather_svgs/02d.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '02n': lazy(() =>
    import('./weather_svgs/02n.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '03d': lazy(() =>
    import('./weather_svgs/03.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '03n': lazy(() =>
    import('./weather_svgs/03.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '04d': lazy(() =>
    import('./weather_svgs/04.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '04n': lazy(() =>
    import('./weather_svgs/04.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '09d': lazy(() =>
    import('./weather_svgs/09.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '09n': lazy(() =>
    import('./weather_svgs/09.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '10d': lazy(() =>
    import('./weather_svgs/10d.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '10n': lazy(() =>
    import('./weather_svgs/10n.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '11d': lazy(() =>
    import('./weather_svgs/11.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '11n': lazy(() =>
    import('./weather_svgs/11.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '13d': lazy(() =>
    import('./weather_svgs/13.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '13n': lazy(() =>
    import('./weather_svgs/13.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '50d': lazy(() =>
    import('./weather_svgs/50.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  '50n': lazy(() =>
    import('./weather_svgs/50.svg').then((module) => ({
      default: module.ReactComponent,
    })),
  ),
  // Add other mappings here
};

const WeatherSvg = ({ icon }) => {
  const IconComponent = iconMap[icon];

  return (
    <Suspense>
      <IconComponent />
    </Suspense>
  );
};

export default WeatherSvg;
