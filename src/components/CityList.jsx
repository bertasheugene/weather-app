import React from "react";

const CityList = ({ cities, loading, onSelectCity, setIsPopupOpen }) => {

  const handleSelectCity = (lat, lon) => {
    onSelectCity(lat, lon);
    setIsPopupOpen(false)
  };
  
  if(loading){
    return (
      <div className="select-list"> <div className="select-list__item">Поиск ...</div> </div>
    );
  }

  return (
    <div className="select-list"> 
      {cities.map((city, index) => (
        <div 
          className="select-list__item"
          key={index}
          onClick={(e) => handleSelectCity(city.lat, city.lon)}>{city.name} ({city.state} {city.country})</div>
      ))}
    </div>
  );
};

export default CityList;