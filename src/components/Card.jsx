import React from 'react'
import { urlFor } from '../utils/client' 

export const Card = ({ url }) => {
  return (
    <div className='w-full py-2 '>
      <img src={urlFor(url)} className='object-cover  rounded-xl w-full shadow-xl shadow-cyan-500/40' />
    </div>
  )
}
