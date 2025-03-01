import React, { useContext } from 'react';

import AccessingLocation from './components/Loading/AccessingLocation';
import AlertLocation from './components/Loading/AlertLocation';
import WeatherApp from './Pages/WeatherApp';
import { CoordContext } from './contexts/CoordContext';
import { WeatherProvider } from './contexts/WeatherContext';

const App = () => {
  const { error, coords } = useContext(CoordContext);

  return (
    <div className="container-md-fluid">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {error && <AlertLocation />}
          {!coords && !error && <AccessingLocation />}
          {coords && (
            <WeatherProvider>
              <WeatherApp />
            </WeatherProvider>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
