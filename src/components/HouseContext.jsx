import React, { createContext, useState, useEffect } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('price (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map(house => {
      return house.country;
    });
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map(house => {
      return house.type;
    });
    const uniqueProperties = ['Property (any)', ...new Set(allProperties)];

    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    // set loading
    setLoading(true);

    // check if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    }

    // get first value of price
    const minPrice = parseInt(price.split(' ')[0]);

    // get second value of price
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter(house => {
      const housePrice = parseInt(house.price);

      // if all values are selected
      if(house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
        ) {
        return house;
      }

      if(isDefault(country) && isDefault(property) && isDefault(price)){
        return house;
      }

      if(!isDefault(country) && isDefault(property) && isDefault(price)){
        return house.country === country;
      }

      if(isDefault(country) && !isDefault(property) && isDefault(price)){
        return house.type === property;
      }
  
      if(isDefault(country) && isDefault(property) && !isDefault(price)){
        if(housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      
      if(!isDefault(country) && !isDefault(property) && isDefault(price)){
        return house.country === country && house.type === property;
      }

      if(!isDefault(country) && isDefault(property) && !isDefault(price)){
        if(housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      if(isDefault(country) && !isDefault(property) && !isDefault(price)){
        if(housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }

    });

    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([]) :
      setHouses(newHouses),
      setLoading(false)
    }, 300);
  }

  const values = {
    country,
    setCountry,
    countries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    loading,
    handleClick
  };

  return <HouseContext.Provider value={values}>
    {children}
  </HouseContext.Provider>
};

export default HouseContextProvider;
