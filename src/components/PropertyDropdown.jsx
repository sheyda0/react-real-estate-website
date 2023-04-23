import React, { useContext, useState } from 'react';
import { HouseContext } from './HouseContext';
import { RiHome5Line } from 'react-icons/ri';
import Dropdown from './Dropdown';

const CountryDropdown = () => {
  const {property, setProperty, properties} = useContext(HouseContext);

  return (
    <Dropdown 
    subject={property}
    subtitle={'Choose your property type'}
    menuItems={properties}
    setItem={setProperty}
    icon={<RiHome5Line className='dropdown-icon-primary' />}
    />
  );
};

export default CountryDropdown;
