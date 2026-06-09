import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "9910f9f8d9973528281b889421602b19";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  async function fetchWeather() {
    const res = await fetch(url);
    const data = await res.json();
    
    setWeather(data);
  }

  return (
    <>
      {weather && (
        <>
          <h2>Place: {weather.name}</h2>
          <p>Temp: {weather.main.temp}</p>
          <p>Humidity: {weather.main.humidity}</p>
          <p>Pressure: {weather.main.pressure}</p>
          <p>Speed: {weather.wind.speed}</p>
        </>
      )}
      <input
        value={city}
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>
    </>
  );
}

export default App;
