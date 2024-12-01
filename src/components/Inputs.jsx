import React from 'react'
import {BiSearch, BiCurrentLocation} from 'react-icons/bi'
import { useContext ,useState} from 'react'
import { WeatherContext } from '../context/WeatherContext'
import  getWeatherData  from '../services/weatherService'


function Inputs() {
  const [inputcity, setInputCity] = useState('');
  const {weather,setCity, setLoading,setUnit} = useContext(WeatherContext);
  
  function handleChange(e){
    console.log(e.target.value)
    setInputCity(e.target.value)

  }
  function handleClick(){
    if(!inputcity.trim()) {
    
      alert('city is required');
      return;
    }
    setCity(inputcity.trim());
    setLoading(true);
   
  };
  function handleUnitClick(unit){
    setUnit(unit);
    setLoading(true);

  };
  return (
    <div className='flex flex-row justify-center items-center my-6'>
    <div className='flex flex-row justify-center items-center my-6 w-3/4 space-x-4'>
    <input type='text' placeholder='Enter city name...' className='text-gray-500 text-xl font-medium px-2 py-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase' name='city' onChange={handleChange}/>
    <BiSearch size={30} className='text-white cursor-pointer transition ease-out hover:scale-125' onClick={handleClick}/>
    <BiCurrentLocation size={30} className='text-white cursor-pointer transition ease-out hover:scale-125' />
    </div>
    <div className='flex flex-row justify-center items-center my-6 w-1/4 space-x-4 '>
    
    <button className='text-white text-2xl font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in hover:scale-125' onClick={() => handleUnitClick('metric')}>&deg;C</button>
    <p className='text-white text-2xl font-medium'>|</p>
    <button className='text-white text-2xl font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in hover:scale-125' onClick= {() => handleUnitClick('imperial')}>&deg;F</button>
   
    </div>
    </div>
  )
}

export default Inputs;