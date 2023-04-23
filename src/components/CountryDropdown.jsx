import React, { useContext, useState } from 'react';
import { HouseContext } from './HouseContext';
import { RiMapPinLine } from 'react-icons/ri';
import Dropdown from './Dropdown';

const CountryDropdown = () => {
  const {country, setCountry, countries} = useContext(HouseContext);

  return (
    <Dropdown 
    subject={country}
    subtitle={'Select your place'}
    menuItems={countries}
    setItem={setCountry}
    icon={<RiMapPinLine className='dropdown-icon-primary' />}
    />
  );
};

export default CountryDropdown;
