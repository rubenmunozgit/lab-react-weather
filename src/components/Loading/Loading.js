import React, { useContext } from "react";
import { LanguageContext } from "../../Context";
import "./Loading.css";

const Loading = () => {
  const { translatedText } = useContext(LanguageContext);
  return (
    <div className="text-center bg-white vh-100">
      <h1>{translatedText.loading_Weather_Info_title}</h1>
      <p>{translatedText.loading_Weather_Info_p}</p>
    </div>
  );
};

export default Loading;
