

export const WatchReducer = (state,action) => {
    const {type, payload} = action
    switch(type){
        case "ADD_TO_WATCHLIST":
            return { ...state, list: payload.list}
        case "DELETE_WATCH":
            return
        case "CLEAR":
            return
        default:
            console.log("No Watch List")

    }
 
}
