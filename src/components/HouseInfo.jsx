import React from 'react'

export default function HouseInfo({icon, text}) {
  return (
  <div className='flex items-center text-gray-600 gap-1'>
    <div className='text-[20px]'>
      {icon}
    </div>
    <div>{text}</div>
  </div>
  )
}
