import React, { useState, useEffect, useRef } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className='dropdown relative' ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        {props.icon}
        <div>
          <div className='text-[15px] font-medium leading-tight'>{props.subject}</div>
          <div className='text-[13px]'>{props.subtitle}</div>
        </div>
          { isOpen ? (
              <RiArrowUpSLine className='dropdown-icon-secondary' />
            ) : (
              <RiArrowDownSLine className='dropdown-icon-secondary' />
            ) }
      </button>
      {
        isOpen && (
            props.priceMenu ? (
                props.menu
            ) : (<ul className='dropdown-menu'>
            { props.menuItems.map((item, index) => {
              return (<li 
              onClick={() => props.setItem(item)}
              className='cursor-pointer hover:text-violet-700 transition' 
              key={index}>
                {item}
              </li>)
            })}
        </ul>)
        )
      }
    </div>
  );
};

export default Dropdown;

