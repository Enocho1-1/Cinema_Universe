import { useQuery } from "react-query"
import { fetchTopRatedTVShows } from "../../../utility"
import { MovieCard } from "../../../components/index"
import { Loader } from "../../../components/index"

export const TopRated = () => {


   
      // Async Function
      fetchTopRatedTVShows()
     // Use Query Initialize
     const { isLoading, error, data} = useQuery("TopRated",  fetchTopRatedTVShows)
    
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
            <div className="grid mt-[25px] px-4 grid-cols-sevenCols justify-center max-mobile:flex max-mobile:flex-col max-mobile:items-center mobile:max-[600px]:grid-cols-twoCols min-[600px]:max-lg:grid-cols-threeCols  gap-x-[2px] gap-y-6 ">
            { data.map( (item, index) => (
                <MovieCard key={index} item={item} type="tv"/>
            ))}
            </div>
            )
        }
    </>
  )
}
