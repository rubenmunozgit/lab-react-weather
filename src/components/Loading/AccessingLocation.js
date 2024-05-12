import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';

const AccessingLocation = () => {
  const { translatedText } = useContext(LanguageContext);
  return (
    <div className="alert alert-info text-center" role="alert">
      <h2>{translatedText.loading_browser_access_loc}</h2>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

export default AccessingLocation;
