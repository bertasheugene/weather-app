import { useState } from 'react';
import { fetchWeather } from '../api/fetchWeather';
import { fetchCities } from '../api/fetchCities';

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);

  const handleFetchWeather = async (lat, lon) => {
    await fetchWeather(lat, lon, setError, setWeather, setCity, setCities);
  };

  const handleFetchCities = async (city) => {
    await fetchCities(city, setCities, setError, setLoading);
  };

  return { weather, cities, error, loading, city, handleFetchCities, handleFetchWeather, setCities };
};