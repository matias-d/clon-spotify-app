import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiPlayFill } from 'react-icons/ri'

export const Card = ({ card }) => {
  return (
    <Link href='#' className='bg-spotify-darkgray p-4 rounded-md flex flex-col items-center lg:items-start justify-center gap-3 hover:bg-spotify-lightgray transition-all relative group'>
      <div>
        <Image
          alt='top hits' width='160' height='350' src={card.image}
          className='rounded shadow-lg mx-auto'
        />
      </div>
      <div className='hidden md:block md:absolute right-6'>
        <RiPlayFill className='text-3xl bg-spotify-green p-2 box-content rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-in-out hover:scale-105' />
      </div>
      <div className='text-center md:text-start'>
        <h5 className='font-medium text-gray-200 mb-2'>{card.title}</h5>
        <p className='text-gray-400 text-sm'>{card.description}</p>
      </div>
    </Link>
  )
}
