import React from 'react'

const WatchListModal = ({watchlist,onClose,removeFromWatchList}) => {
  return (
    <>
    <div className='absolute top-2 left-0 w-[45%] max-h-screen overflow-y-auto rounded-tr-lg bg-[rgb(252,188,176)] shadow-[7px_0px_1px_1px_rgba(0,0,0,0.8)] overflow-hidden  px-5'>
        <div className="absolute right-0 top-0 h-full w-3 bg-[rgb(252,152,56)]"></div>
        <i className="bi bi-x-circle-fill text-white cursor-pointer text-2xl" onClick={()=> onClose()}></i>
        <br />
        {watchlist.length == 0 ? <p className='text-center text-white font-medium text-lg pb-3'>SIN FAVORITOS <i className="bi bi-emoji-frown-fill text-2xl"></i></p> : 
          <div className='py-2 flex flex-col items-center gap-4'>
            {watchlist.map((data)=>{
              return(
              <div key={data.id} className='border-2 w-[80%] h-30 bg-cover bg-no-repeat px-1 py-1' style={{ backgroundImage: `url(${data.img})` }}>
                <i onClick={()=>removeFromWatchList(data.id)} className=" text-2xl cursor-pointer bi bi-trash bg-red-400 p-.5 rounded text-white"></i>
              </div>
              )

            })}
          </div>
        }
    </div>
    
    </>
  )
}

export default WatchListModal