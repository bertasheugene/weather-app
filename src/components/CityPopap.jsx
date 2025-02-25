import React from "react";
import { useState } from 'react'
import CityList from './CityList';
import { IoMdClose } from "react-icons/io";

const CityPopap = ({ cities, city, loading, handleFetchCities, handleFetchWeather, setIsPopupOpen }) => {
    const [searchTimeout, setSearchTimeout] = useState(null);
    
    const handleInputChange = (e) => {
        const query = e.target.value;
    
        if (searchTimeout) {
          clearTimeout(searchTimeout);
        }
    
        setSearchTimeout(
          setTimeout(() => {
            handleFetchCities(query);
          }, 300)
        );
    }

    const closePopap = () => {
        setIsPopupOpen(false);
    }

    return (
        <div className="popap">
            <div className="popap__wrapper">
                <button type="button" className="popap__close button-clear" onClick={closePopap}><IoMdClose /></button>
                <div className="select-wrapper">
                    <div>
                    <input
                        type="text"
                        placeholder="Введите город"
                        onChange={handleInputChange}
                        className='form-city'
                        />
                    </div>
                    
                    <CityList cities={cities} city={city} loading={loading} onSelectCity={handleFetchWeather} setIsPopupOpen={setIsPopupOpen} />
                </div>
            </div>
        </div>
    );

}

export default CityPopap;