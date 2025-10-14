import React, { useState } from 'react'
import WatchListModal from './WatchListModal'
import MarioList from './MarioList'
import useWatchList from '../hooks/useWatchList'


const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {watchlist, addToWatchList, removeFromWatchList} = useWatchList();


  //   useEffect(() => {
  //   localStorage.setItem("watchlist", JSON.stringify(watchlist));
  // }, [watchlist]);

  return (
    <>
    <div className='overflow-hidden'>
        <div className='py-3 px-10 relative flex flex-col items-end'>
            <button onClick={()=> setIsModalOpen(true)} className='bg-[rgb(252,152,56)] text-lg text-white rounded cursor-pointer px-3 border-3 border-black transition-all mb-10'>MIS FAVORITOS</button>
            {isModalOpen && <WatchListModal watchlist={watchlist} onClose={()=> {setIsModalOpen(false)}} removeFromWatchList={removeFromWatchList}/>}

            <MarioList addToWatchList={addToWatchList} watchlist={watchlist}/>
        </div>
    </div>


    
    </>
  )
}

export default Main