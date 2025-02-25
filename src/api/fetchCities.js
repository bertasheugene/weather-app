import axios from 'axios';

const GEOCODING_API_URL = 'https://api.openweathermap.org/geo/1.0/direct';
const API_KEY = 'a012600ab465f78b5ba26b3334a64bbb';

export const fetchCities = async (city, setCities, setError, setLoading) => {
  try {
    if (!city) {
      setCities([]);
      return;
    }

    setLoading(true);

    const response = await axios.get(GEOCODING_API_URL, {
      params: {
        q: city,
        limit: 5,
        appid: API_KEY,
      },
    });

    if (!(response.status === 200)) {
      throw new Error("Ошибка при загрузке данных");
    }
    setCities(response.data);
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
    setCities([]);
  } finally {
    setLoading(false);
  }
};