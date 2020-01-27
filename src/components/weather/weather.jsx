import React from "react";

import './weather.scss';

// This will be a function that given the necessary weather data
// will return a JSX object to display it
const Weather = ({
  city,
  country,
  temperature,
  humidity,
  description,
  error
}) => {
  return (
    <>
    {city && country && temperature && 
      <div className="weatherContainer">
      <div id="card" className={"card day"}>
        <div id="temp" className="text">{Math.floor(temperature)}</div>
        <div id="cloudy" className="cloudy">
          <div className="cloud"></div>
          <div className="sol"></div>
        </div>
        <div id="clear" className="clear">
          <div className="sol"></div>
        </div>
        <div id="rainy" className="rainy">
          <div className="cloud">
            <div className="rain"></div>
            <div className="rain"></div>
            <div className="rain"></div>
            <div className="rain"></div>
          </div>
        </div>
        <div id="storm" className="storm">
          <div className="cloud">
            <div className="rain"></div>
            <div className="rain"></div>
            <div className="rain"></div>
            <div className="rain"></div>
          </div>
        </div>
        <div id="haze" className="haze">
          <div className="cloud"></div>
        </div>
      </div>
      <div id="city" className="city">{city+", "+country}</div>
    </div>}
    </>
  );
  /*return (
    <div className="weatherInfo">
      {city && country && (
        <p className="weatherKey">
          Location:{" "}
          <span className="weatherValue">
            {" "}
            {city}, {country}
          </span>
        </p>
      )}

      {temperature && (
        <p className="weatherKey">
          Temperature: <span className="weatherValue"> {temperature}</span>
        </p>
      )}

      {humidity && (
        <p className="weatherKey">
          Humidity: <span className="weatherValue"> {humidity} </span>
        </p>
      )}

      {description && (
        <p className="weatherKey">
          Condition: <span className="weatherValue"> {description}</span>
        </p>
      )}

      {error && <p className="weatherError">{error}</p>}
    </div>
  );*/
};
export default Weather;