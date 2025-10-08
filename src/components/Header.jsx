import React from 'react'
import imgBg from '../assets/bg.png'
import TextHero from './TextHero'

const Header = () => {
  return (
    <header style={{ backgroundImage: `url(${imgBg})` }} className='min-h-screen bg-cover bg-no-repeat bg-bottom flex flex-row-reverse items-center px-13'>
        <TextHero/>
    </header>
  )
}

export default Header