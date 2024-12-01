
import React from 'react'
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';



function DailyForecast() {
    const { forecast, city ,unit} = useContext(WeatherContext);
    if (!forecast || !forecast.list) return null;
  
    // Filter for midday entries (12:00 PM) to represent daily data
    const dailyForecast = forecast.list.filter((item) =>
      item.dt_txt.includes('12:00:00')
    );
  
    return (
        <div>
        <div className="flex justify-start items-center mt-5">
          <p className="text-lg text-white uppercase">Daily Forecast</p>
        </div>
        <hr className="my-1" />
        <div className="flex flex-row justify-between items-center mt-1">
          {dailyForecast.map((item, index) => {
            const day = new Date(item.dt * 1000).toLocaleDateString('en-US', {
              weekday: 'short',
            });
            const temp = Math.round(item.main.temp); // Round temperature to nearest integer
            const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
  
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-evenly"
              >
                <p className="text-white text-sm font-light">{day}</p>
                <img
                  src={iconUrl}
                  alt="weather icon"
                  className="w-10 my-1"
                />
                <p className="text-white font-medium">{unit === 'metric' ? <span>{temp}°C</span> : <span>{temp}°F</span> }</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  
export default DailyForecast