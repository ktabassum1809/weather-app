

import './App.css'
import DailyForecast from './components/DailyForecast'
import Forecast from './components/Forecast'
import Inputs from './components/Inputs'
import TempDetails from './components/TempDetails'
import TimeAndLocation from './components/TimeAndLocation'
import { useContext } from 'react'
import { WeatherContext } from './context/WeatherContext'




function App(){
  const { weather,getBackgroundColor } = useContext(WeatherContext);
  const backgroundColor = getBackgroundColor(weather); 
 

  return (
    <>
   
  <div className={`mx-auto max-w-screen-lg mt-10 py-5 px-32 ${backgroundColor}`}>

  <Inputs />
  <TimeAndLocation />
  <TempDetails />
  <Forecast />
  <DailyForecast />
 
  </div>
    </>
  )
}

export default App
