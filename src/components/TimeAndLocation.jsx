import React, { useState, useEffect, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import formatLocalTime, { formatLocalDate } from "../utils.js";

function TimeAndLocation() {
  const [currentTime, setCurrentTime] = useState(null);
  const { weather, city, error } = useContext(WeatherContext);

  if (error) {
    return (
      <div className="flex justify-center items-center my-6">
        <p className="text-red-500 text-xl font-medium">{error}</p>
      </div>
    );
  }

  useEffect(() => {
    if (!weather) return; // Prevent running the interval if weather is null

    const interval = setInterval(() => {
      const realTime = formatLocalTime(Math.floor(Date.now() / 1000), weather.timezone);
      setCurrentTime(realTime);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [weather]); // Depend on weather to re-run when it updates

  const localDate = weather ? formatLocalDate(weather.dt, weather.timezone) : "Loading date...";

  return (
    <div>
      {/* Date and Time */}
      <div className="flex flex-row justify-center items-center my-6">
        {city && (
          <p className="text-white text-xl font-extralight">
            {localDate} <span className="text-2xl">|</span> {currentTime || "Loading time..."}
          </p>
        )}
      </div>

      {/* City and Country */}
      <div className="flex justify-center items-center my-6">
        <p className="text-white text-xl font-medium">
          City: {city || "Loading city..."} | Country: {weather?.sys?.country || "Loading country..."}
        </p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
