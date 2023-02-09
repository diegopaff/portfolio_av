import React, { useState } from 'react';


const Work = ({title, image}) => {
    

    

    const toggleModal = () => {
        setModal(prev => !prev)
    }
    return (
        
            <div className='w-screen h-auto p-1 relative
                            sm:w-[420px] sm:h-[224px]'>
                <div className='w-full h-full absolute bg-white opacity-0 top-0 left-0 hover:opacity-70 transition-opacity grid place-items-center cursor-pointer'>
                    <h3 className='font-poppins font-bold text-xl'> {title} </h3>
                </div>
                <img src={image} className='h-full object-cover '>
                    
                </img>
            </div>
            
    
    )
}

export default Work