

export const WatchReducer = (state,action) => {
    const {type, payload} = action
    switch(type){
        case "ADD_TO_WATCHLIST":
            return { ...state, list: payload.list}
        case "REMOVE_FROM_WATCHLIST":
            return { ...state, list: payload.list}
        case "CLEAR":
            return { ...state, list: []}
        default:
            console.log("No Watch List")

    }
 
}
