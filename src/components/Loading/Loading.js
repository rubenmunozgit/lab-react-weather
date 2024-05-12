import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const Loading = () => {
  const { translatedText } = useContext(LanguageContext);
  return (
    <div className="text-center bg-white">
      <h1>{translatedText.loading_browser_access_loc}</h1>
    </div>
  );
};

export default Loading;
