import Image from 'next/image'
import React from 'react'
import {
  RiHome5Fill,
  RiSearchLine,
  RiFoldersLine,
  RiAddBoxFill,
  RiHeartFill,
  RiCloseCircleFill
} from 'react-icons/ri'

export const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className={`bg-spotify-black fixed z-50 top-0 w-60 h-full p-6 flex flex-col justify-between ${showSidebar ? 'left-0' : '-left-full'} md:left-0 transition-all duration-300`}>
      <div className='absolute right-4 top-8'>
        <RiCloseCircleFill className='text-2xl text-gray-300 hover:text-white hover:cursor-pointer transition-colors md:hidden' onClick={() => setShowSidebar(false)} />
      </div>
      <div>
        <div className='mb-8'>
          <Image
            width='130'
            height='130'
            alt='Spotify Logo'
            src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
          />
        </div>
        <nav>
          <ul className='flex flex-col gap-4'>
            <li>
              <a href='#' className='flex text-white items-center font-bold text-sm gap-4'><RiHome5Fill className='text-2xl' /> Inicio</a>
            </li>
            <li>
              <a href='#' className='flex text-gray-400 items-center font-bold text-sm gap-4 hover:text-white transition-colors'><RiSearchLine className='text-2xl' /> Buscar</a>
            </li>
            <li className='mb-6'>
              <a href='#' className='flex text-gray-400 items-center font-bold text-sm gap-4 hover:text-white transition-colors'><RiFoldersLine className='text-2xl' /> Tu biblioteca</a>
            </li>
            <li>
              <a href='#' className='flex text-gray-400 items-center font-bold text-sm gap-4 hover:text-white transition-colors'><RiAddBoxFill className='text-2xl' /> Crear lista</a>
            </li>
            <li>
              <a href='#' className='flex text-gray-400 items-center font-bold text-sm gap-4 hover:text-white transition-colors'><RiHeartFill className=' bg-indigo-700 rounded-md text-2xl p-1' /> Tus me gusta</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <ul>
          <li>
            <a href='#' className='text-gray-300 text-[0.7rem] hover:underline'>Cookies</a>
          </li>
          <li>
            <a href='#' className='text-gray-300 text-[0.7rem] hover:underline'>Privacidad</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
