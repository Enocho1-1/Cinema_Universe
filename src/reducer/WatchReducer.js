

export const WatchReducer = (state,action) => {
    const {type, payload} = action
    switch(type){
        case "ADD_WATCHLIST":
            return { ...state, list: payload.list}
        case "ADD_TO_WATCHLIST":
            return { ...state, list: payload.list}
        case "REMOVE_FROM_WATCHLIST":
            return { ...state, list: payload.list}
        // case "ADD_NAME":
        //     return { ...state, name: payload.value}
        // case "ADD_EMAIL":
        //     return { ...state, email: payload.value}
        // case "ADD_ID":
        //     return { ...state, id: payload.value}
        case "ADD_ACCESS_TOKEN":
            return { ...state, accessToken: payload.value}
        case "ADD_PASSWORD":
            return { ...state, passWord: payload.value}
        case "ALL":
            return { ...state, movie: false, tv:false}
        case "ALL_MOVIES":
            return{...state , movie:payload.value, tv:false  }
        case "ALL_TV":
            return{...state , movie:false, tv:payload.value  }
        case "CLEAR":
            return { ...state, list: []}
        default:
            throw new Error("No Watch List")

    }
 
}
