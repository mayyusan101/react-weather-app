import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import "./forecast-weather.css";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const getForecastDates = () => {
  const now = new Date();
  const forecastDates = []; // to store dates
  for (let i = 1; i < 8; i++) {
    const newDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i); // get date for next day
    forecastDates.push({
      day: days[newDate.getDay()],
      date: newDate.getDate(),
      month: months[newDate.getMonth()],
    });
  }
  return forecastDates;
};

function ForecastWeather({ data }) {
  const [forecaseDates, setForecaseDates] = useState(null);

  // get dates for next week
  useEffect(() => {
    setForecaseDates(getForecastDates());
  }, []);
  return (
    <div className="forecast">
      <h2 className="forest__title">7-day forecast</h2>
      {forecaseDates && (
        <Accordion allowZeroExpanded>
          {data.list.slice(0, 7).map((data, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="weather__wrapper">
                    <p className="weather-date">
                      {forecaseDates[index].day}, {forecaseDates[index].date}/{forecaseDates[index].month}
                    </p>
                    <div className="weather__img-temp">
                      <div className="weather-img">
                        <img src={`icons/${data.weather[0].icon}.png`} alt="icon" />
                      </div>
                      <span> / {Math.round(data.main.temp - 273.15)}°C</span>
                    </div>
                    <div className="weather-conditions">
                      <p>{data.weather[0].description}</p>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="panel__wrapper">
                  <div className="panel__top">
                    <div className="weather__img">
                      <img src={`icons/${data.weather[0].icon}.png`} alt="icon" />
                    </div>
                    <div className="weather__descriptions">
                      <h2 className="weather__desc">{data.weather[0].description}</h2>
                      <p>
                        The high will be {Math.round(data.main.temp_max - 273.15)}°C, the low will be {Math.round(data.main.temp_min - 273.15)}°C.
                      </p>
                    </div>
                  </div>
                  <div className="panel__bottom">
                    <div className="weather__single-contion">
                      <label>Temperature </label>
                      <span>{Math.round(data.main.temp - 273.15)}°C</span>
                    </div>
                    <div className="weather__single-contion">
                      <label>Wind </label>
                      <span>{data.wind.speed} min/s</span>
                    </div>
                    <div className="weather__single-contion">
                      <label>Pressure </label>
                      <span>{data.main.pressure} hPa</span>
                    </div>
                    <div className="weather__single-contion">
                      <label>Humidity </label>
                      <span>{data.main.humidity} %</span>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}

export default ForecastWeather;
