import { createContext, useContext,useReducer } from "react";

const initialState ={
    list:[]
}

const WatchContext = createContext(initialState)

export const WatchProvider = ({children}) => {

    const value = {
        list:[1,2,3]
    }

    return(
        <WatchContext.Provider value={value}>
            {children}
        </WatchContext.Provider>
    )
}

export const useWatch = () => useContext(WatchContext)