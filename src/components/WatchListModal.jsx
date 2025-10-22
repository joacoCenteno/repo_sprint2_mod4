import React from 'react'

const WatchListModal = ({watchlist,onClose,removeFromWatchList, removeAllWatchList}) => {
  return (
    <>
    <div className='absolute top-0 left-0 w-full h-full z-2 overflow-y-auto  bg-black/80  overflow-hidden py-3  px-5'>
        <i className="bi bi-x-circle-fill text-white cursor-pointer text-xl" onClick={()=> onClose()}></i>
        <button onClick={removeAllWatchList} className=' bg-red-400 text-white ml-5 px-2 py-1 mb-1 rounded cursor-pointer'>Delete All</button>
        <br />
        {watchlist.length == 0 ? <p className='text-center text-white font-medium text-lg pb-3'>SIN FAVORITOS <i className="bi bi-emoji-frown-fill text-2xl"></i></p> : 
          <div className='py-2 flex flex-col items-center gap-4'>
            {watchlist.map((data)=>{
              return(
              <div key={data.id} className=' relative rounded-lg w-[50%] h-40 bg-cover bg-center bg-no-repeat px-1 py-1' style={{ backgroundImage: `url(${data.img})` }}>
                <i onClick={()=>removeFromWatchList(data.id)} className=" text-2xl cursor-pointer bi bi-trash bg-red-400 p-.5 rounded text-white"></i>
                <p className='absolute bottom-0 text-amber-50 font-medium text-lg'>{data.titulo}</p>
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