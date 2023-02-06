import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { close, menu } from '../assets';

import { navLinks } from '../constants';


const NavBar = () => {

    const [toggle, setToggle] = useState(false);
    const handleToggleNavbar = () => setToggle((prev) => !prev ) 
  
    return (
      <nav className='max-w-[1600px] w-full flex px-6 justify-between items-center h-20' >
        <Link to={`/`} className='flex' >
          <h2 className='font-poppins text-black text-3xl font-extrabold'>DC</h2>
        </Link>
        {/* --------------- NavBar version desktop ---------------------------*/}
        <ul className='list-none  hidden justify-end items-center gap-10
                        sm:flex'>
          {navLinks.map((item, index) => (
            <li key={item.id} className='flex justify-center align-middle text-black gap-2 font-poppins cursor-pointer' >  
              <Link to={`/${item.linkTo}`} 
                 className='flex'>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
  
        {/* --------------- NavBar version mobile ---------------------------*/}
        <div className='flex flex-1 justify-end items-center
                        sm:hidden'>
          <img 
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={handleToggleNavbar}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} absolute top-14 right-0 m-2 min-w-full z-10`}>
            <ul className='bg-white list-none flex flex-col items-center w-full'>
              {navLinks.map((item, index) => (
                <li key={item.id} className={ `w-full flex h-20 justify-center items-center text-black font-poppins cursor-pointer border-b-2 border-gray-900 font-medium text-lg hover:bg-[#f3f3f3]`}>  
                  <Link to={`/${item.linkTo}`} className='flex  w-full h-full justify-center items-center' onClick={() => setToggle((prev) => !prev )} >
                    {item.title}
                   </Link>
                </li>
              ))}
              
            </ul>
          </div>
        </div>
        
      </nav>
    )
      
  }
  
  export default NavBar;