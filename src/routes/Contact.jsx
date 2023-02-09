import React from 'react'

const Contact = () => {
  return (
    <div className='grid place-items-center font-poppins'>
        
        <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-full px-3 mb-6 md:mb-0">
                <label class="block  tracking-wide text-gray-700 text-base font-regular mb-2" for="grid-first-name">
                    Nombre
                </label>
                <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" S/>
                
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block tracking-wide text-gray-700 text-base font-regular mb-2" for="grid-password">
                    E-mail
                </label>
                <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block tracking-wide text-gray-700 text-base font-regular mb-2" for="grid-password">
                    Mensaje
                </label>
                <textarea class=" no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                {/* <p class="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
            </div>
        </div>
        <div class="md:flex md:items-center">
            <div class="md:w-1/3">
                <button class="shadow bg-white hover:bg-black focus:shadow-outline focus:outline-none text-black hover:text-white border border-black font-bold py-2 px-4 rounded" type="button">
                    Enviar
                </button>
            </div>
            <div class="md:w-2/3"></div>
        </div>
        </form>
    </div>
  )
}

export default Contact;