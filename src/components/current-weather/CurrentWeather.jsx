import React from "react";
import "./current-weather.css";

function CurrentWeather({ data }) {
  return (
    <div className="weather__card">
      <div className="weather__top">
        <div className="weather__name">
          <h2>
            {data.name}, {data.sys.country}
          </h2>
          <p>{data.weather[0].description}</p>
        </div>
        <div className="weather__img">
          <img src={`icons/${data.weather[0].icon}.png`} alt="icon" />
        </div>
      </div>
      <div className="weather__bottom">
        <h1 className="weather__temperature">{Math.round(data.main.temp - 273.15)}°C</h1>
        <div className="weather__conditions">
          <div className="details">Details</div>
          <div className="single__condition">
            <label>Feels like </label>
            <span>{Math.round(data.main.feels_like - 273.15)}°C</span>
          </div>
          <div className="single__condition">
            <label>Wind </label>
            <span>{data.wind.speed} min/s</span>
          </div>
          <div className="single__condition">
            <label>Humidity </label>
            <span>{data.main.humidity} %</span>
          </div>
          <div className="single__condition">
            <label>Pressure </label>
            <span>{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
