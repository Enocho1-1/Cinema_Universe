import { createContext, useContext,useReducer } from "react";
import { WatchReducer } from "../reducer/WatchReducer";
import { toast } from "react-toastify";

const initialState ={
    list:[]
}

const WatchContext = createContext(initialState)

export const WatchProvider = ({children}) => {
    const [state,dispatch] = useReducer(WatchReducer,initialState)

    // Add to WatchList
    function addToWatchlist (item){
        const duplicateItem = state.list.find( watchItem => watchItem.id === item.id)

        if(duplicateItem){
            toast.error(`Already in Watch List`)
        } else{
            const updateList = state.list.concat(item)
            toast.success(`Added to watchlist`)
            dispatch({
                type:"ADD_TO_WATCHLIST",
                payload:{
                    list: updateList
                }
            })
        }
   
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
    const value = {
        list:state.list,
        dispatch,
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