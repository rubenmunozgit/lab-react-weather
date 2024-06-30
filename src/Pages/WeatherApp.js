import useFetchWeather from '../hooks/useFetchWeather';
import Nav from '../components/Nav/Nav';
import Loading from '../components/Loading/Loading';
import Current from '../components/Current/Current';
import Forecast from '../components/Forecast/Forecast';

const WeatherApp = () => {
  const { data, error, isLoading, setRefresh } = useFetchWeather();
  return (
    <div>
      {error && (
        <div className="alert alert-danger" role="alert">
          <h2 className="text-center">{error.message} </h2>
        </div>
      )}
      {isLoading && <Loading />}
      {data && (
        <>
          <Nav />
          <Current {...data.current} {...data.system} refresh={setRefresh} />
          <Forecast {...data.forecast} />
        </>
      )}
    </div>
  );
};

export default WeatherApp;
