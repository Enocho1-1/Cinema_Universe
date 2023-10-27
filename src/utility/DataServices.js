
// BackDrop Images Async (Carousel)
export  const fetchBackDrop = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b80d59c33d6d57ed9c7e3713f91c188a')
    if(!response.ok){
      throw new Error(`${response.status}`)
    } else {
      const result = await response.json()
      const array = result.results.slice(0,10)

      return array
    }
    
}

// Trending Now
export const fetchTrending = async () => {
              
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b80d59c33d6d57ed9c7e3713f91c188a')
    if(!response.ok){
        throw new Error(`${response.status}`)
      } else{
        const result = await response.json()
        const array = result.results.slice(11,15)
        
        return array
      }
    
}

// Upcoming Movies
export const fetchUpComingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b80d59c33d6d57ed9c7e3713f91c188a')
    if(!response.ok){
      throw new Error(`${response.status}`)
    } else{
      const result = await response.json()
      return result
    }
   
}

// Now Playing Movies
export const fetchNowPlayingMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b80d59c33d6d57ed9c7e3713f91c188a')
  if(!response.ok){
      throw new Error(`${response.status}`)
    } else{
      const result = await response.json()
      const array = result.results.slice(0,14)
     
      return array
    }
}

// Popular TV
export const fetchPopularTVShows = async () => {
  const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=b80d59c33d6d57ed9c7e3713f91c188a')
  if(!response.ok){
      throw new Error(`${response.status}`)
    } else{
      const result = await response.json()
      const array = result.results.slice(0,14)

      return array
    }
}

// Top Rated TV
export const fetchTopRatedTVShows = async () => {
  const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=b80d59c33d6d57ed9c7e3713f91c188a')
  if(!response.ok){
      throw new Error(`${response.status}`)
    } else{
      const result = await response.json()
      const array = result.results.slice(0,14)

      return array
    }
  
}



// Fetch Movie or TV
export  const fetchMovieOrTV = async (data,movie_id,setIsShown,setInfo) => {

  const type = data === "MOVIE" || data === "movie" ? `https://api.themoviedb.org/3/movie/${movie_id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a` : `https://api.themoviedb.org/3/tv/${movie_id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a`
  const response = await fetch(type)
  if (!response.ok){
    throw new Error(`${response.status}`)
  }else{
    const result = await response.json()
    setIsShown(false)
    setInfo(result)
  }
}

// Fetch Movie or TV Recommendations
export  const fetchRecommended = async (data,movie_id,setRecommend) => {

  const path = data === "MOVIE" || data === "movie" ? `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=b80d59c33d6d57ed9c7e3713f91c188a`: `https://api.themoviedb.org/3/tv/${movie_id}/recommendations?api_key=b80d59c33d6d57ed9c7e3713f91c188a`
  const response = await fetch(path)
  if (!response.ok){
    throw new Error(`${response.status}`)
  }else{
    const result = await response.json()
    const array = result.results.slice(0,10)
    setRecommend(array)
  }
  
}

// Update User Watch List
export const updateWatchList = async (list,retrieveUserData) => {

  const {userName,userID, userEmail, userToken} = retrieveUserData()

  const userList = {
    id:userID,
    name:userName,
    userToken: userToken,
    userEmail: userEmail,
    list: list
  }

  const options = {
    method: "PUT",
    headers:{"Content-Type": "application/json", Authorization: `Bearer ${userToken}`},
    body:JSON.stringify(userList)
}


  try{
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders/${userID}`, options)
    if(!response.ok){
        throw new Error(`${response.status}`)
    } 

}catch(error){
    throw new Error(error.message)
}
}