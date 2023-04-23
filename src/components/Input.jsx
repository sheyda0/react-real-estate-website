import React from 'react'

export default function Input({placeholder}) {
  return (
    <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' 
    type="text"
    placeholder={placeholder}
     />
  )
}
