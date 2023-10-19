// BackDrop Images Async
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