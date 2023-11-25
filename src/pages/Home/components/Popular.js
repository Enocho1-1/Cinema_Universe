import { useQuery } from "react-query"
import { fetchPopularTVShows } from "../../../utility"
import { MovieCard,Loader } from "../../../components/index"
import { Category_Contain } from "./Category_Contain"

export const Popular = () => {

  
      // Async Function
      fetchPopularTVShows()
     // Use Query Initialize
     const { isLoading, error, data} = useQuery("Popular", fetchPopularTVShows)
    
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
            { data.map( (item, index) => (
                <MovieCard key={index} item={item} type="tv"/>
            ))}
            </Category_Contain>
            )
        }
    </>
  )
}
