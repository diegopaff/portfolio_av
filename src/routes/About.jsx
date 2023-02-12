import React from 'react'

const About = () => {
  return (
    <div className='font-poppins text-black dark:text-white h-[calc(100vh-176px)] max-w-[1600px] flex flex-col gap-10 mx-auto mt-5 items-center
    sm:justify-center sm:flex-row'>
    
      <p className='text-base flex flex-wrap px-6 sm:w-1/2'>
        Hola, mi nombre es Diego y soy un Licenciado en Ingeniería Audiovisual con un enfoque en la postproducción de video. Me especializo en la unión de todas las piezas y la creación de producciones visuales impactantes que capturan y transmiten la esencia de la historia. Con habilidades técnicas versátiles y un enfoque en la satisfacción del cliente, estoy listo para llevar tu proyecto al siguiente nivel y lograr resultados sobresalientes de manera profesional y efectiva.
      </p>
      <div className='rounded-full overflow-hidden w-[80vw] h-[80vw]
      sm:w-[50vh] sm:h-[50vh]'>
        <img className='h-full object-cover tranlate-y-[-100px]' src='https://i.ibb.co/ZxJT4fm/profile-Picture.jpg'></img>
      </div>
    </div>
  )
}

export default About