import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { videos } from '../constants'

const WorkDetail = () => {

    const {workId} = useParams();
    const [video, setVideo] = useState([]);

    useEffect(() => {
        {videos.map((item)=> {
            if(item.value == workId){
                setVideo(item);
            }
        })}
    }, [])
   
  return (
    <div className='flex flex-col items-center w-screen px-2'>
        <div className='w-full max-w-[1600px]'>
            <iframe src={video.video} className="w-full aspect-video" ></iframe>
        </div>
        <p>{video.title}</p>
        <p>{video.description}</p>
       
    </div>
  )
}

export default WorkDetail