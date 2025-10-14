import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <>
      <div className='font-display'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </>
  )
}

export default Home