import React from 'react'
import {
  RiMore2Fill,
  RiArrowLeftSLine,
  RiArrowRightSLine
} from 'react-icons/ri'

export const Header = ({ setShowSidebar }) => {
  return (
    <header className=' text-white z-40 md:ml-60 fixed top-0 left-0 w-full md:pr-64 flex items-center justify-between bg-spotify-darkgray py-2 px-8'>
      <div className='md:hidden'>
        <RiMore2Fill className='text-4xl bg-[#090909] rounded-full p-2 text-gray-400 hover:cursor-pointer hover:text-white transition-colors border-box' onClick={() => setShowSidebar(true)} />
      </div>
      <div className='hidden md:flex gap-2 '>
        <RiArrowLeftSLine className='text-3xl text-gray-400 bg-[#090909]  rounded-full box-content hover:cursor-pointer hover:text-white transition-colors' />
        <RiArrowRightSLine className='text-3xl text-gray-400 bg-[#090909] rounded-full box-content hover:cursor-pointer hover:text-white transition-colors' />
      </div>
      <div className='flex gap-6'>
        <button className='text-gray-400 font-bold hover:text-white hover:scale-105 transition-all'>Registrarse</button>
        <button className='bg-white py-2 md:py-3 px-6 rounded-full text-spotify-darkgray font-bold hover:scale-105 transition-transform'>Iniciar sesión</button>
      </div>
    </header>
  )
}
