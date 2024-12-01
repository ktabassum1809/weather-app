const API_KEY = '2a826838db0a211512eed1b486be9479'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(`${BASE_URL}${infoType}`);
    url.searchParams.append('appid',API_KEY);
    Object.entries(searchParams).forEach(([key, value]) => {
        url.searchParams.append(key, value.trim());
    });
    console.log("Fetching Weather Data from:", url.toString()); // Debug the URL
    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log("Weather data fetched successfully:", data);
            return data;
        })
        .catch((err) => console.error("Error fetching weather data:", err));
};
export default getWeatherData
