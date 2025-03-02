import Nav from '../components/Nav/Nav';
import Loading from '../components/Loading/Loading';
import Current from '../components/Current/Current';
import Forecast from '../components/Forecast/Forecast';
import { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';

const WeatherApp = () => {
  const { data, error, isLoading } = useContext(WeatherContext);
  return (
    <>
      <Nav />
      {error && (
        <div className="alert alert-danger" role="alert">
          <h2 className="text-center">{error.message} </h2>
        </div>
      )}
      {isLoading && <Loading />}
      {data && (
        <>
          <Current />
          <Forecast />
        </>
      )}
    </>
  );
};

export default WeatherApp;
