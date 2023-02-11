import React, { useState } from 'react';


const Work = ({title, image}) => {
    

    

    const toggleModal = () => {
        setModal(prev => !prev)
    }
    return (
        
            <div className='w-screen p-1 relative 
                            sm:w-[420px] h-[224px]'>
                <div className='w-full h-full absolute bg-white opacity-0 top-0 left-0 hover:opacity-70 transition-opacity flex flex-col justify-center items-center cursor-pointer'>
                    <h3 className='font-poppins font-bold text-xl'> {title} </h3>
                    <p className=' font-thin'> ver proyecto </p>
                </div>
                <img src={image} className='h-full w-full object-cover '>
                    
                </img>
            </div>
            
    
    )
}

export default Work