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
            toast.error(`${item.type} already in Watch List`)
        } else{
            const updateList = state.list.concat(item)
            dispatch({
                type:"ADD_TO_WATCHLIST",
                payload:{
                    list: updateList
                }
            })
        }
   
    }

    const value = {
        list:state.list,
        addToWatchlist
    }

    return(
        <WatchContext.Provider value={value}>
            {children}
        </WatchContext.Provider>
    )
}

export const useWatch = () => useContext(WatchContext)