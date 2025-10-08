import React from 'react'

const MarioCard = ({game, addToWatchList, isFavorite}) => {

  const {titulo, img} = game;

  return (
    <>
        <div className="relative bg-[rgb(252,252,252)] border-[3px] border-black w-80 h-50 rounded-none shadow-[6px_0px_0px_-2px_rgba(0,0,0,0.8)]">

        <div className="absolute top-1 left-1 w-4 h-4 bg-cyan-200 border-[2px] border-black rounded-sm "></div>
        <div className="absolute top-1 right-1 w-4 h-4 bg-cyan-200 border-[2px] border-black rounded-sm z-1"></div>
        <div className="absolute bottom-1 left-1 w-4 h-4 bg-cyan-200 border-[2px] border-black rounded-sm"></div>
        <div className="absolute bottom-1 right-1 w-4 h-4 bg-cyan-200 border-[2px] border-black rounded-sm z-1"></div>
        


        <div className="flex flex-col items-center justify-center h-full text-black relative text-xs">
          
          <div className='flex justify-center'>
            <img src={img} alt="No cargo" className='w-60'/>
           
          </div>
          <div className='flex items-center justify-center gap-2 mt-3'>
          <p className='font-medium text-black'>{titulo}</p>
          {
            !isFavorite ? (
              <i onClick={()=>{addToWatchList(game)}} className="bi bi-star-fill text-lg cursor-pointer text-gray-500"></i>
            ) : (
              <i className="bi bi-star-fill text-lg text-[rgb(255,234,1)] cursor-default"></i>
            )

          }
         
          </div>

        </div>
      </div>
    </>
  )
}

export default MarioCard