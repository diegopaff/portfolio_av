import React from 'react';
import { videos } from '../constants'
import Work from './Work.jsx'

const WorkContainer = () => {
  return (
    <div className='bg-white flex flex-col items-center justify-center gap-6'>
         <h2 className='text-black font-poppins font-semibold'> Trabajos Realizados </h2>
         <div className='flex flex-col 
                        sm:flex-row '>
            {videos.map((item)=> (
                <Work 
                    key={item.id} 
                    title={item.title}
                    image={item.thumbnail}
                    description={item.description}
                    video={item.video}
                />
                
            ))}
         </div>
         
    </div>
  )
}

export default WorkContainer;