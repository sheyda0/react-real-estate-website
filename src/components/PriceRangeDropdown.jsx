import React, { useContext, useState } from 'react';
import { HouseContext } from './HouseContext';
import { RiMapPinLine } from 'react-icons/ri';
import Dropdown from './Dropdown';

const CountryDropdown = () => {
  const {price, setPrice} = useContext(HouseContext);

  const prices = [
    {
      value: 'Price range (any)'
    },
    {
      value: '100000 - 130000'
    },
    {
      value: '130000 - 160000'
    },
    {
      value: '160000 - 190000'
    },
    {
      value: '190000 - 220000'
    },
    {
      value: '100000 - 300000'
    },
    {
      value: '300000 - 400000'
    },
  ];


  return (
    <Dropdown 
    subject={price}
    subtitle={'Choose price range'}
    menuItems={prices}
    setItem={setPrice}
    icon={<RiMapPinLine className='dropdown-icon-primary' />}
    priceMenu={true}
    menu={
      <ul className='dropdown-menu'>
        { prices.map((price, index) => {
            return (<li 
            onClick={() => setPrice(price.value)}
            className='cursor-pointer hover:text-violet-700 transition' 
            key={index}>
              {price.value}
            </li>)
          })}
      </ul>
      }
    />
  );
};

export default CountryDropdown;
