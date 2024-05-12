import React, { useContext } from 'react';
import './styles.css';

import AccessingLocation from './components/Loading/AccessingLocation';
import AlertLocation from './components/Loading/AlertLocation';
import WeatherApp from './Pages/WeatherApp';
import { CoordContext } from './contexts/CoordContext';

const App = () => {
  const { error, coords } = useContext(CoordContext);

  return (
    <div className="container-md-fuild">
      <div className="row row-cols-md-3 vh-100">
        <div className="col-md-8">
          {error && <AlertLocation />}
          {!coords && !error && <AccessingLocation />}
          {coords && <WeatherApp />}
        </div>
      </div>
    </div>
  );
};
export default App;
