import { useQuery } from "react-query"
import { fetchNowPlayingMovies } from "../../../utility"
import { MovieCard, Loader  } from "../../../components/index"
import { Category_Contain } from "./Category_Contain"


export const NowPlaying = () => {

    // Async Function Call
    fetchNowPlayingMovies()
    // Use Query Initialize
    const { isLoading, error, data} = useQuery("NowPlaying", fetchNowPlayingMovies)
    
    if(error){
        throw new Error(error.message)
    }

  return (
    <>
        {   
            isLoading 
            ? 
            <Loader/>
            :
            ( 
            <Category_Contain >
            { data.map( (item, index) => (
                <MovieCard key={index} item={item} type="movie"/>
            ))}
           </Category_Contain>
            )
        }
    </>
  )
}
