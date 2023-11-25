import { useQuery } from "react-query"
import { Category_Contain } from "./Category_Contain"
import { MovieCard,Loader  } from "../../../components/index"
import { fetchUpComingMovies } from "../../../utility"


export const UpComing = () => {

  fetchUpComingMovies()
  // Use Query Initialize
  const { isLoading, error, data} = useQuery("upcoming", fetchUpComingMovies)

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
            <Category_Contain>
            { data.results.map( (item, index) => (
                <MovieCard key={index} item={item} type="movie"/>
            ))}
            </Category_Contain>
            )
        }
    </>
  
  )
}
