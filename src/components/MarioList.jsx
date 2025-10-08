import React from 'react'
import MarioCard from './MarioCard'
import { marioData } from '../utils/data'

const MarioList = ({addToWatchList, watchlist}) => {
  return (
    <>
        <div className='flex flex-wrap justify-between gap-6'>
            {marioData.map((data)=>{
                return(
                    <MarioCard key={data.id}  game={data} addToWatchList={addToWatchList} isFavorite={watchlist.some((g) => g.id === data.id)}/>
                )
                
            })}
        </div>
    </>
  )
}

export default MarioList