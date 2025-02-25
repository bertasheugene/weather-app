import React from 'react';
import './Weather.css'

const Weather = ({ data }) => {

  const staticData = {
    main: {
      temp: '',
      feels_like: '',
      humidity: '',
    },
    weather: [
      {
        icon: '01d',
        description: '',
      },
    ],
    wind: {
      speed: '',
    },
  };
  
  const { main, weather, wind } = data || staticData;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather">
      <div className='weather__wpapper'>
        <div className='weather__main'>
          <div className='weather__image'>
            <img src={iconUrl} alt={weather[0].description} />
          </div>
          <div className='weather__temp'>{main.temp ? Math.round(main.temp)+'°C' : ''}</div>
        </div>
        <div className='weather__info'>
          <div className='weather__item'>
            <div className='weather__field'>It feels like:</div>
            <div className='weather__value'>{main.feels_like ? Math.round(main.feels_like)+'°C' : '-'}</div>
          </div>
          <div className='weather__item'>
            <div className='weather__field'>Weather:</div>
            <div className='weather__value'>{weather[0].description ? weather[0].description : '-'}</div>
          </div>
          <div className='weather__item'>
            <div className='weather__field'>Humidity:</div>
            <div className='weather__value'>{main.humidity ? main.humidity + ' %' : '-'}</div>
          </div>
          <div className='weather__item'>
            <div className='weather__field'>Wind:</div>
            <div className='weather__value'>{wind.speed ? wind.speed + ' m/s' : '-'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;