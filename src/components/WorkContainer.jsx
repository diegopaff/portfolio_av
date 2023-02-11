import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { videos, videoTypes } from '../constants'
import Work from './Work.jsx'

const WorkContainer = () => {
  const [filter, setFilter] = useState("all");
  const [filterVideos, setFilterVideos] = useState([]);
  
  useEffect(() => {
    /* Cada vez que se modifica el filtro con el select filtro la base de datos y genero una nueva según la categoría */
    setFilterVideos([]);
    if(filter == 'all'){
      setFilterVideos(videos);
    } else {
      videos.map((item) => {
        if(item.category == filter){
          setFilterVideos(filterVideos => [...filterVideos, item]);
        }
      })
    }
  
  }, [filter]);
  
  /* Obtengo el valor del select */
  const filterOnChangeHandler = (ev) => { 
    setFilter(ev.target.value);

  }

  return (
    <div className='flex flex-col items-center gap-6 max-w-[1600px] mx-auto mb-14 min-h-[calc(100vh-212px)]'>
      <h2 className='text-black dark:text-white font-poppins font-bold text-2xl mt-6'> Últimos trabajos </h2>

      <div className='flex flex-col'>
        <h3 className='font-poppins font-regular ml-1 text-black dark:text-white'> Filtrar por Categoría </h3>
        <select className='w-[200px] ml-1' onChange={filterOnChangeHandler}>
          {videoTypes.map((item)=> (
            <option value={item.value}> {item.title} </option>
          ))}
        </select>
      
            
        {/* Listado de todos los videos de la base */}
        <div className='grid grid-cols-1 mt-3
                      sm:grid-cols-3'>
          {filterVideos.map((item, index)=> (

            <Link to={`/work/${item.value}`}>
              <Work 
                  key={item.id} 
                  title={item.title}
                  image={item.thumbnail}
                  description={item.description}
                  video={item.video}/>
            </Link>
            
              
          ))}
        </div>
      
      </div>  
         
    </div>
  )
}

export default WorkContainer;