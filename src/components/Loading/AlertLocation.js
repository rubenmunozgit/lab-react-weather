import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';

const AlertLocation = () => {
  const { translatedText } = useContext(LanguageContext);
  return (
    <div className="alert alert-danger" role="alert">
      <h2 className="text-center">
        {translatedText.loading_browser_loc_allow}
      </h2>
    </div>
  );
};

export default AlertLocation;
