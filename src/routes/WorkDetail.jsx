import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { videos } from '../constants'
import { Link } from 'react-router-dom'
import { AiOutlineLeft , AiOutlineRight } from 'react-icons/ai'

const WorkDetail = () => {

    const {workId} = useParams();
    const [video, setVideo] = useState([]);
   
    const indexOfVideo = videos.findIndex( element => element.value == workId)
    const indexNextVideo = indexOfVideo == videos.length - 1 ? 0 : indexOfVideo + 1;
    const indexPrevVideo = indexOfVideo == 0 ? videos.length - 1 : indexOfVideo - 1;

    useEffect(() => {
        {videos.map((item, index)=> {
            if(item.value == workId){
                setVideo(item);
                
            }
        })}
    }, [workId])
   
  return (
    <div className='flex flex-col items-center w-screen px-2 gap-5 h-[calc(100vh-157px)]'>
        <div className='w-full max-w-[1600px]'>
            <iframe src={video.video} className="w-full aspect-video" allowFullScreen></iframe>
        </div>
        <div className='flex flex-col font-poppins w-full max-w-[1600px] gap-5'>
            <div className="flex items-baseline font-poppins gap-5">
                <h3 className='font-semibold text-3xl text-black dark:text-white'>{video.title}</h3>
                <p className='font-light text-sm text-gray-600 dark:text-gray-300 '> {`( ${video.rol} )`}</p>
            </div>
            <p className='font-regular text-base text-black dark:text-white'>{video.description}</p>
        </div>
        <div className='flex w-full max-w-[1200px] mx-auto justify-between font-poppins my-5'>
           <Link className='flex text-black dark:text-white gap-2 items-center' to={`/work/${videos[indexPrevVideo].value}`}>
                <AiOutlineLeft className='text-3xl text-black dark:text-white '/> <span>Video anterior</span>
            </Link>
            <Link className='flex text-black dark:text-white gap-2 items-center' to={`/work/${videos[indexNextVideo].value}`}>
                <span>Próximo Video</span> <AiOutlineRight className='text-3xl text-black dark:text-white' />  
            </Link>
            
        </div>
       
    </div>
  )
}

export default WorkDetail