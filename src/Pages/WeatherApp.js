import useFetchWeather from '../hooks/useFetchWeather';
import Nav from '../components/Nav/Nav';
import Loading from '../components/Loading/Loading';
import Current from '../components/Current/Current';
import Forecast from '../components/Forecast/Forecast';

const WeatherApp = () => {
  const { data, error, isLoading, handleFetchWeather } = useFetchWeather();
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
          <Current
            {...data.current}
            {...data.system}
            refresh={handleFetchWeather}
          />
          <Forecast {...data.forecast} />
        </>
      )}
    </>
  );
};

export default WeatherApp;
