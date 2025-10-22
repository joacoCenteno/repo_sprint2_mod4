import { useState, useEffect } from "react";

const useWacthList = () =>{
    const [watchlist, setWatchList] = useState([]);

    const addToWatchList = (game) =>{
      setWatchList([...watchlist,game]);
      localStorage.setItem("watchlist", JSON.stringify([...watchlist,game]))
    }
    
    const removeFromWatchList = (id) =>{
      const updatedList = watchlist.filter((game => game.id != id));
      setWatchList(updatedList);
      localStorage.setItem("watchlist", JSON.stringify(updatedList))
    }

    
    const removeAllWatchList = () =>{
      setWatchList([]);
      localStorage.clear();
    }
  
    useEffect(() => {
        const savedWatchList = JSON.parse(localStorage.getItem("watchlist")) || [];
        setWatchList(savedWatchList);
    }, []);


    return {watchlist, addToWatchList, removeFromWatchList, removeAllWatchList}
}


export default useWacthList;