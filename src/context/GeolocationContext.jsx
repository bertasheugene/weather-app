import React, { createContext, useContext, useState, useEffect } from "react";

const GeolocationContext = createContext();

export const GeolocationProvider = ({ children }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError("Ошибка при получении геопозиции: " + error.message);
        }
      );
    } else {
      setError("Ваш браузер не поддерживает Geolocation API.");
    }
  }, []);

  return (
    <GeolocationContext.Provider value={{ latitude, longitude, error }}>
      {children}
    </GeolocationContext.Provider>
  );
};

export const useGeolocation = () => {
  return useContext(GeolocationContext);
};