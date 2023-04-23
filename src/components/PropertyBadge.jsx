import React from 'react'

export default function PropertyBadge({color, text}) {
  return (
    <div className={`bg-${color}-500 text-white px-3 rounded-full`}>{text}</div>
  )
}
