import axios from 'axios';

const API_KEY = 'a012600ab465f78b5ba26b3334a64bbb';

export const fetchWeather = async (lat, lon, setError, setWeather, setCity, setCities) => {
  try {
    if (!(lat && lon)) {
      return;
    }
    const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

    const response = await axios.get(API_URL,
        {
            params: {
                lat: lat,
                lon: lon,
                appid: API_KEY,
                units: 'metric',
                lang: 'en',
            },
        }
    );
    if (!(response.status === 200)) {
      throw new Error("Ошибка при загрузке данных");
    }
    setCity(response.data.name)
    setWeather(response.data);
    setCities([]);
    setError('');
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response) {
        if (err.response.status === 404) {
          setError("Город не найден. Проверьте правильность ввода.");
        } else {
          setError(`Ошибка: ${err.response.status} ${err.response.statusText}`);
        }
      } else {
        setError("Ошибка сети или проблемы с сервером.");
      }
    } else {
      setError("Произошла неизвестная ошибка.");
    }
    setWeather(null);
  }
};