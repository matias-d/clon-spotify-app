import Link from 'next/link'
import React from 'react'
import { Card } from './Card'
import { CardsLists } from '../services/CardsLists'

export const Section = ({ title, section }) => {
  const cards = CardsLists[section]
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
        <Link href='#' className='text-[1.35rem] font-bold text-white hover:underline'>{title}</Link>
        <Link href='#' className='text-gray-300 text-xs hover:underline font-bold tracking-[0.1rem]'>VER TODO</Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
        {
          cards.map((card) => (
            <Card key={card.id} card={card} />
          ))
        }
      </div>
    </div>
  )
}
