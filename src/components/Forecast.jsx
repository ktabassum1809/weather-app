import React from 'react'
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';


function Forecast() {
  const {forecast, city,unit} = useContext(WeatherContext);
  if(!forecast || !forecast.list)
  return null;


    const forecastData = forecast.list.slice(0, 5); // Get the first 5 items

  return (
    <div>
    <div className="flex justify-start items-center mt-5">
    <p className="text-lg text-white  uppercase">3 hour step forecast</p>
    </div>
    <hr className='my-1' />
    <div className='flex flex-row justify-between items-center mt-1'>

    {
forecastData.map((item, index) => {
  const day = new Date(item.dt * 1000).toLocaleDateString('en-US', {
    weekday: 'short',
  });
  const date = new Date(item.dt * 1000);
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true,
  });
  const temp = Math.round(item.main.temp ).toFixed(1);

    return (
        <div key={index} className='flex flex-col items-center justify-evenly'>
        <p className='text-white text-sm font-light'>{day} </p>
        <p className="text-white text-sm font-light">{time}</p>
        <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt="weather icon"
                className="w-10 my-1"
              />
        <p className='text-white font-medium'>{ unit === 'metric'? <span>{temp} °C </span> : <span>{temp} °F </span>}</p>
        </div>
    )
    })}
    </div>
    </div>
  )
}

export default Forecast