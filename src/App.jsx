import { useState, useEffect } from 'react'
import './App.css'
import Weather from './components/Weather';
import CityPopap from './components/CityPopap';
import { useWeather } from './hooks/useWeather';
import { GeolocationProvider, useGeolocation } from "./context/GeolocationContext";
import { FaPencilAlt } from "react-icons/fa";

function App() {

  const { latitude, longitude, errorGeo } = useGeolocation();
  const { weather, cities, error, loading, city, handleFetchCities, handleFetchWeather, setCities } = useWeather();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      handleFetchWeather(latitude, longitude);
    }
  }, [latitude, longitude]);

  return (
    <div className="card">
      <div className='card__wrapper'>
        <div className='card__top'>
          <h1>{city ?city : 'The city is not selected'}</h1>
          <button type='button' className='button-clear' onClick={() => setIsPopupOpen(true)}><FaPencilAlt /></button>
        </div>
        
        {<Weather data={weather} />}
      </div>

      {isPopupOpen && (
        <CityPopap cities={cities} city={city} loading={loading} handleFetchCities={handleFetchCities} handleFetchWeather={handleFetchWeather} setIsPopupOpen={setIsPopupOpen} />
      )} 

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App
