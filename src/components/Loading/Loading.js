import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const Loading = () => {
  const { translatedText } = useContext(LanguageContext);
  return (
    <div className="Current">
      <div className="Country_City placeholder-glow">
        <span className="placeholder bg-info w-75 me-2"></span>
        <button className="btn placeholder bg-info pt-0 pb-2"></button>
      </div>
      <div className="Weather">
        <div className="Temp">
          <div className="Temp__Current m-2 placeholder-glow w-75">
            <span className="placeholder bg-info w-75"></span>
          </div>
          <div className="Temp__Feels m-2 placeholder-glow w-75">
            <span className="placeholder bg-info w-50"></span>
          </div>
        </div>
        <div className="Icon">
          <div className="placeholder-glow w-75">
            <span
              className="placeholder bg-info w-75 m-2"
              style={{ height: '8em' }}
            >
              &nbsp;&nbsp;&nbsp;
            </span>
          </div>
          <div className="Description placeholder-glow w-75">
            <span className="placeholder bg-info w-50"></span>
          </div>
        </div>
      </div>
      <div className="Details placeholder-glow">
        <div className="placeholder bg-info w-75"></div>
        <div className="placeholder bg-info w-75"></div>
        <div className="placeholder bg-info w-75"></div>
        <div className="placeholder bg-info w-75"></div>
      </div>
    </div>
  );
};

export default Loading;
