import React from 'react'
import {FaThermometerEmpty } from 'react-icons/fa'
import { BiSolidDropletHalf } from 'react-icons/bi'
import {FiWind } from 'react-icons/fi'
import{ GiSunrise, GiSunset } from 'react-icons/gi'
import { MdKeyboardArrowDown , MdKeyboardArrowUp} from 'react-icons/md'
import { useContext, createContext} from 'react'
import { WeatherContext } from '../context/WeatherContext';
import formatLocalTime from '../utils.js'

function TempDetails() {
  const {weather, city,setCity,unit} = useContext(WeatherContext);
  if(!weather) return null;

  const horizontalDetails = 
  [
    { 
      id:1,
      Icon : GiSunrise,
      title : 'Sunrise',
      value: formatLocalTime(weather.sys.sunrise,weather.timezone),
    },
    { 
      id:2,
      Icon : GiSunset,
      title : 'Sunset',
      value: formatLocalTime(weather.sys.sunset,weather.timezone),
    },
    { 
      id:3,
      Icon : MdKeyboardArrowUp,
      title : 'High',
      value:unit === 'metric' ?`${weather.main.temp_max} °C` : `${weather.main.temp_max} °F`,
    },
    { 
      id:4,
      Icon : MdKeyboardArrowDown,
      title : 'Low',
      value: unit === 'metric' ?`${weather.main.temp_min} °C` : `${weather.main.temp_min} °F` ,
    }
  ]

  return (
    <div>
    <div className='flex  justify-center items-center py-6 text-xl'>
    <p className="text-white capitalize">{weather.weather[0].description}</p>
    
    </div>
    <div className='flex flex-row justify-between items-center py-3 text-xl'>
    <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="w-20"
        />
    <p className='text-white text-5xl'>{unit === 'metric' ? <span>{weather.main.temp}&deg;C</span> :<span>{weather.main.temp}&deg;F</span> } </p>
    <div className='flex flex-col items-start space-y-3'>
    <div className='flex flex-row items-center space-x-2'>
    <FaThermometerEmpty className='text-white text-m'/>
    <p className='text-white'>Feels like {weather.main.feels_like}&deg;C</p>
    </div>
    <div className='flex flex-row items-center space-x-2'>
    <BiSolidDropletHalf className='text-white text-m'/>
    <p className='text-white'>Humidity {weather.main.humidity}%</p>
    </div>
    <div className='flex flex-row items-center space-x-2'>
    <FiWind className='text-white text-m'/>
    <p className='text-white'>Wind {((weather.wind.speed) * 3.6).toFixed(2)}km/h</p>
    </div>
    </div>
    </div>
    <div className='flex flex-row justify-between items-center py-3 text-xl mt-3'>
   {
    horizontalDetails.map((item) => {
      return(
        <div key={item.id} className='flex flex-row items-center space-y-2 space-x-1 text-m'>
        <item.Icon className='text-white text-lg'/>
        <p className='text-white'> {item.title}</p> 
        <p className='text-white'> {item.value}</p>
        </div>
      )})}
        </div>
    
   
    </div>
   
  
  )
    }

export default TempDetails;