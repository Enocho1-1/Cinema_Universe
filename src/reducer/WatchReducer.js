

export const WatchReducer = (state,action) => {
    const {type, payload} = action
    switch(type){
        case "ADD_TO_WATCHLIST":
            return { ...state, list: payload.list}
        case "REMOVE_FROM_WATCHLIST":
            return { ...state, list: payload.list}
        case "ALL":
            return { ...state, movie: false, tv:false}
        case "ALL_MOVIES":
            return{...state , movie:payload.value, tv:false  }
        case "ALL_TV":
            return{...state , movie:false, tv:payload.value  }
        case "CLEAR":
            return { ...state, list: []}
        default:
            console.log("No Watch List")

    }
 
}
