import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdDarkMode , MdOutlineDarkMode, MdMenu, MdClose} from 'react-icons/md'
import { close, menu } from '../assets';

import { navLinks } from '../constants';


const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    /* ------------- Darkmode ------------------- */
    const [theme, setTheme] = useState('light');

    useEffect(()=>{
      if(theme === 'light'){
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },[theme]);
    
    const toggleDarkMode = () => {
      setTheme( theme == 'light' ? 'dark' : 'light');
    }
    /* --------------------------------------------- */

    const handleToggleNavbar = () => setToggle((prev) => !prev )

  
    return (
      <nav className='max-w-[1600px] w-full flex flex-row px-6 justify-between items-center h-20' >
        <Link to={`/`} className='flex' >
          <h2 className='font-poppins text-black dark:text-white text-3xl font-extrabold'>DC</h2>
        </Link>
        {/* --------------- NavBar version desktop ---------------------------*/}
        <ul className='list-none hidden justify-end items-center gap-10
                        sm:flex'>
          {navLinks.map((item, index) => (
            <li key={item.id} className='flex justify-center align-middle text-black dark:text-white gap-2 font-poppins cursor-pointer' >  
              <Link to={`/${item.linkTo}`} 
                 className='flex'>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={toggleDarkMode} className=''>
          {theme === 'light' ? <MdDarkMode className='text-3xl text-black dark:text-white cursor-pointer'/> : <MdOutlineDarkMode className='text-3xl text-black dark:text-white cursor-pointer'/> }
        </button>
  
        {/* --------------- NavBar version mobile ---------------------------*/}
        <div className='flex  items-center
                        sm:hidden'>
          {toggle ? <MdClose className='text-3xl text-black dark:text-white cursor-pointer' onClick={handleToggleNavbar}/> : <MdMenu className='text-3xl text-black dark:text-white cursor-pointer' onClick={handleToggleNavbar}/>}
            
          <div className={`${toggle ? 'flex' : 'hidden'} absolute top-14 right-0 min-w-full z-10`}>
            <ul className='bg-white dark:bg-[#171717] list-none flex flex-col items-center w-full'>
              {navLinks.map((item, index) => (
                <li key={item.id} className={ `w-full flex h-20 justify-center items-center text-black dark:text-white font-poppins cursor-pointer border-b-2 border-gray-900 font-medium text-lg hover:bg-[#f3f3f3] dark:hover:bg-[#222222]`}>  
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