import React from 'react'
import { urlFor } from '../utils/client' 

export const Card = ({ url }) => {
  return (
    <div className='h-full bg-yellow-200 w-40'>
      <img src={urlFor(url)} className='object-cover rounded-lg h-full w-full ' />
    </div>
  )
}
