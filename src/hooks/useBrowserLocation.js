import getCoords from '../servicesClients/coordenates';
import { useEffect, useState } from 'react';

const useBrowserLocation = () => {
  const [error, setError] = useState(null);
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    const asyncHandler = async () => {
      try {
        const position = await getCoords();
        setCoords({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      } catch (error) {
        setError(error);
      }
    };
    asyncHandler();
  }, []);

  return {
    error,
    coords,
  };
};

export default useBrowserLocation;
