import './App.css';
import Search from './components/search/Search';
import { WEATHER_API_URL, WEATHER_API_KEY } from './components/Api';
import CurrentWeather from './components/current-weather/CurrentWeather';
import { useState } from 'react';
import ForecastWeather from './components/forecast-weather/ForecastWeather';


function App() {

  const [ currentWeather, setCurrentWeather ] = useState(null);
  const [ forecastWeather, setForecastWeather ] = useState(null);

  const handleSearchChange = (searchData) => {

    const [lat, lon] = searchData.value.split(" ");
    fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    .then((response) => response.json())
    .then((data) => setCurrentWeather(data))
    .catch((err) => console.log(err))

    fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    .then((response) => response.json())
    .then((data) => setForecastWeather(data))
    .catch((err) => console.log(err))

  }

  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange}/>
      {
        currentWeather && <CurrentWeather data={currentWeather}/>
      }
      {
        forecastWeather && <ForecastWeather data={forecastWeather}/>
      }
    </div>
  );
}

export default App;
