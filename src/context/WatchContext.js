import { createContext, useContext,useReducer } from "react";
import { WatchReducer } from "../reducer/WatchReducer";


const initialState ={
    list:[],
    movie: false,
    tv:false
}

const WatchContext = createContext(initialState)

export const WatchProvider = ({children}) => {
    const [state,dispatch] = useReducer(WatchReducer,initialState)

    function retrieveUserData(){
        const userName = sessionStorage.getItem("userName")
        const userID = sessionStorage.getItem("userId")
        const userEmail = sessionStorage.getItem("userEmail")
        const userToken= sessionStorage.getItem("accessToken")

        return  {userName,userID, userEmail, userToken}
    }

    // Add Custom User List
    function addWatchList(userList){
        dispatch({
            type:"ADD_WATCHLIST",
            payload:{
                list:userList
            }
        })
    }

    // Add Item WatchList
    function addToWatchlist(item){
    
        const updateList = state.list.concat(item)
        dispatch({
            type:"ADD_TO_WATCHLIST",
            payload:{
                list: updateList
            }
        })
    
    }

    // Remove from WatchList
    function removeFromWatchlist(item){
        const updateList = state.list.filter( watchItem => watchItem.id !== item.id)
        dispatch({
            type:"REMOVE_FROM_WATCHLIST",
            payload:{
                list: updateList 
            }
        })
    }

    // Filter Movies
    function filterMovies(watchlist){
        return state.movie ? watchlist.filter(item => item.type === "movie" || item.type === "MOVIE") : watchlist
    }

     // Filter TV
     function filterTV(watchlist){
        return state.tv ? watchlist.filter(item => item.type === "tv" || item.type === "TV") : watchlist
    }

    const filteredList = filterTV(filterMovies(state.list))
    
    const value = {
        list: filteredList,
        state,
        dispatch,
        retrieveUserData,
        addWatchList,
        addToWatchlist,
        removeFromWatchlist
    }

    return(
        <WatchContext.Provider value={value}>
            {children}
        </WatchContext.Provider>
    )
}

export const useWatch = () => useContext(WatchContext)