import React from 'react'

const Curriculum = () => {

  return (
    <div className='w-screen h-screen sm:h-[150vh] flex flex-col items-center gap-4 px-1
                  sm:w-[50vw] sm:mx-auto' >
        <a class="bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-black rounded w-40 text-center" href='https://drive.google.com/uc?export=download&id=1Uz4Gc_yROOZ0yHwUNUuvJQdNACFghtGG'>
          Descargar CV
        </a>
        <iframe src="https://drive.google.com/file/d/1Uz4Gc_yROOZ0yHwUNUuvJQdNACFghtGG/preview" width="100%" height="95%" allow="autoplay"></iframe>
    </div>
  )
}

export default Curriculum