import React from 'react'

const TextHero = () => {
  return (
    <div className=' max-w-80 md:max-w-160'>
        <h1 className='font-black text-5xl md:text-6xl text-[rgb(76,220,72)]'>BIENVENIDO AL REINO CHAMPIÑON </h1>
        <p className='text-[rgb(252,152,56)] mt-4  font-medium  text-lg'>Encontrarás una gran variedad de videojuegos lanzados por Nintendo en relación a la franquicia Mario Bros.</p>
        <p className='text-[rgb(252,152,56)] font-medium  text-lg'>Aprenderás alguna que otra cosa nueva, y si alguno de estos videojuegos es tu favorito...Puedes guardarlo en tu <span className=' text-[rgb(76,220,72)]'>LISTADO DE FAVORITOS</span></p>
        <p className='text-[rgb(252,152,56)] font-medium  text-lg'>Hora de descubir el Reino Champiñon!!!</p>
    </div>
  )
}

export default TextHero