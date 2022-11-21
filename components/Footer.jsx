import React from 'react'

const Footer = () => {
  return (
    <footer className='hidden md:block bg-gradient-to-r  from-[#A6329E] via-[#8061C5] to-[#5990EC] z-50 fixed bottom-0 w-full border-t border-gray-900'>

      <div className='flex justify-between items-center py-3 px-10'>
        <div>
          <h4 className='uppercase tracking-[0.1rem] text-xs font-medium text-white'>Muestra de Spotify</h4>
          <p className='text-md font-normal text-white'>Regístrate para disfrutar de canciones y podcasts sin límites, con anuncios ocasionales. No hace falta tarjeta de crédito.</p>
        </div>
        <button className='bg-white py-2 md:py-2 px-6 rounded-full text-spotify-darkgray font-bold hover:scale-105 transition-transform'>Registrarte Gratis</button>
      </div>
    </footer>
  )
}

export default Footer
