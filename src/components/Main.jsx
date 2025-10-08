import React, { useState, useEffect } from 'react'
import WatchListModal from './WatchListModal'
import MarioList from './MarioList'

const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [watchlist, setWatchList] = useState([])
    
    const addToWatchList = (game) =>{
      setWatchList([...watchlist,game]);
      localStorage.setItem("watchlist", JSON.stringify([...watchlist,game]))
    }
    
    const removeFromWatchList = (id) =>{
      const updatedList = watchlist.filter((game => game.id != id));
      setWatchList(updatedList);
      localStorage.setItem("watchlist", JSON.stringify(updatedList))
    }

  
    useEffect(()=>{
      const savedWatchList = JSON.parse(localStorage.getItem("watchlist")) || []
      setWatchList(savedWatchList)
    },[])

  //   useEffect(() => {
  //   localStorage.setItem("watchlist", JSON.stringify(watchlist));
  // }, [watchlist]);

  return (
    <>
    <div className='overflow-hidden'>
        <div className='py-3 px-10 relative flex justify-end z-2'>
            <button onClick={()=> setIsModalOpen(true)} className='bg-[rgb(252,152,56)] text-lg text-white rounded cursor-pointer px-3 border-3 border-black transition-all'>MIS FAVORITOS</button>
            {isModalOpen && <WatchListModal watchlist={watchlist} onClose={()=> {setIsModalOpen(false)}} removeFromWatchList={removeFromWatchList}/>}
        </div>

        <div className='py-3 px-10 z-0'>
            <MarioList addToWatchList={addToWatchList} watchlist={watchlist}/>
        </div>
    </div>


    
    </>
  )
}

export default Main