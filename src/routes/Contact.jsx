import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form"
import { AiFillCheckSquare } from 'react-icons/ai'

const Contact = () => {
    /* utilizo useForm Hook para el manejo del form */
    const { register, formState: {errors}, handleSubmit, reset } = useForm();
    
    const form = useRef();
    
    /* Emailjs para enviar mail desde el formulario */
    const sendEmail = (ev) => {
        console.log(ev.nombre);
        emailjs.sendForm('service_lns9smm', 'template_portfolio_AV', form.current , 'RLzHWGu0VQuk5fekx')
        .then((result) => {
            toast((t) => (
                <span className='font-poppins text-base text-black flex gap-3' >
                    <AiFillCheckSquare className=' text-green-600 text-7xl'/>
                    Gracias {ev.nombre} por contactarme, tu mensaje fue enviado correctamente.
                </span>
              ));
            
            reset();
            console.log(result.text)
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div className='flex flex-col gap-5 justify-center items-center font-poppins h-[calc(100vh-157px)]'>
        <Toaster />
        <h2 className='text-black dark:text-white font-poppins font-bold text-3xl my-6'> Contacto </h2>
        
        <form ref={form} className="w-full max-w-lg px-3 gap-1" onSubmit={handleSubmit(sendEmail)}>
            <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full md:w-full px-3 mb-1 md:mb-0">
                    <label className="block  tracking-wide text-black dark:text-white text-base font-semibold mb-2" for="nombre">
                        Nombre
                    </label>
                    <input  
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="nombre" 
                        type="text" 
                        name='nombre'
                        {...register('nombre' , {
                            required: true,
                            maxLength:30,})} />
                            {errors.nombre?.type === 'required' && <p className='font-poppins font-extralight text-xs text-red-500'>Nombre requerido.</p>}
              
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                    <label className="block tracking-wide text-black dark:text-white text-base font-semibold mb-2" for="email">
                        E-mail
                    </label>
                    <input  
                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="email" 
                        type="email" 
                        name='email'
                        {...register('email' ,  {
                            required: true,
                            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} /> {/* Es una plantilla que evalua el formato para validar que sea un email */}
                            {errors.email?.type === 'required' && <p className='font-poppins font-extralight text-xs text-red-500'>Email requerido.</p>}
                            {errors.email?.type === 'pattern' && <p className='font-poppins font-extralight text-xs text-red-500'>El formato del Email es invalido</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                    <label className="block tracking-wide text-black dark:text-white text-base font-semibold mb-2" for="message">
                        Mensaje
                    </label>
                    <textarea 
                        className=" no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
                        id="message" 
                        name='message'
                        {...register('message' , {required:true, maxLength: 500} )}></textarea>
                        {errors.message?.type === 'required' && <p className='font-poppins font-extralight text-xs text-red-500'>Escriba su mensaje.</p>}
                        {errors.message?.type === 'maxLength' && <p className='font-poppins font-extralight text-xs text-gray-700'> Máximo 500 caracteres.</p>}
                    {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="text-center md:w-1/3 shadow bg-white hover:bg-black focus:shadow-outline focus:outline-none text-black hover:text-white border border-black font-bold rounded h-9">
                    <input className='pointer w-full h-full cursor-pointer' type="submit" value='Enviar' />
                </div>
                <div className="md:w-2/3"></div>
            </div>
        </form>
    </div>
  )
}

export default Contact;