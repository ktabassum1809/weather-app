import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import getWeatherData from "../services/weatherService";

export const WeatherContext = createContext();

function WeatherContextProvider({ children }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric");

  useEffect(() => {
    if (!city.trim()) return;

    setLoading(true);

    getWeatherData("weather", { q: city, units: unit })
      .then((data) => {
        if (
          data.cod !== 200 ||
          data.name.toLowerCase() !== city.toLowerCase()
        ) {
          setError(`City not found: ${city}`);
          setWeather(null);
          setLoading(false);
          return;
        }

        setWeather(data);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setError("An error occurred while fetching weather data.");
        setWeather(null);
        setLoading(false);
      });
  }, [city, unit]);

  useEffect(() => {
    if (!city.trim()) return;

    setLoading(true);

    getWeatherData("forecast", { q: city, units: unit })
      .then((data) => {
        if (
          data.cod !== "200" ||
          data.city.name.toLowerCase() !== city.toLowerCase()
        ) {
          setError(`City not found: ${city}`);
          setForecast(null);
          setLoading(false);
          return;
        }

        setForecast(data);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setError("An error occurred while fetching forecast data.");
        setForecast(null);
        setLoading(false);
      });
  }, [city, unit]);

  function getBackgroundColor(weather) {
    if (!weather || !weather.weather || !weather.weather[0]) {
      return "bg-gradient-to-b from-blue-500 to-blue-300"; // Default
    }
  
    const main = weather.weather[0].main;
  
    switch (main) {
      case "Clear":
        return "bg-gradient-to-b from-blue-500 to-blue-300";
      case "Clouds":
        return "bg-gradient-to-b from-gray-500 to-gray-300";
      case "Rain":
        return "bg-gradient-to-b from-blue-700 to-blue-500";
      case "Snow":
        return "bg-gradient-to-b from-white to-gray-300";
      case "Thunderstorm":
        return "bg-gradient-to-b from-yellow-500 to-yellow-300";
      case "Drizzle":
        return "bg-gradient-to-b from-blue-500 to-blue-300";
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squall":
      case "Tornado":
        return "bg-gradient-to-b from-gray-500 to-gray-300";
      default:
        return "bg-gradient-to-b from-blue-500 to-blue-300"; 
    }
  }
  
  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        error,
        setError,
        loading,
        setLoading,
        city,
        setCity,
        setForecast,
        forecast,
        unit,
        setUnit,
        getBackgroundColor,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
export default WeatherContextProvider;
