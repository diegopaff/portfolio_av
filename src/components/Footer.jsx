import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black py-5 flex justify-center items-center gap-5'>
        <Link to={`/`} className='flex' >
            <h2 className='font-poppins text-white text-3xl font-extrabold'>DC</h2>
        </Link>

        <p className='font-poppins font-extralight text-gray-400 text-sm'> Diego Curutchet </p>
    </div>
  )
}

export default Footer