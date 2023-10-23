
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

// Update User Watch List
export const updateWatchList = async (list,state) => {

  const userList = {
    id:state.id,
    name:state.name,
    userToken: state.accessToken,
    userEmail: state.email,
    list: list
  }

  const options = {
    method: "PUT",
    headers:{"Content-Type": "application/json", Authorization: `Bearer ${state.accessToken}`},
    body:JSON.stringify(userList)
}


  try{
    const response = await fetch(`http://localhost:34000/660/orders/${state.id}`, options)
    if(!response.ok){
        throw new Error(`${response.status}`)
    } 

}catch(error){
    throw new Error(error.message)
}
}