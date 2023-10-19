import { useQuery } from "react-query"
import { MovieCard } from "../../../components/index"
import { Loader } from "../../../components/index"
import { fetchUpComingMovies } from "../../../utility"


export const UpComing = () => {

  fetchUpComingMovies()
  // Use Query Initialize
  const { isLoading, error, data} = useQuery("upcoming", fetchUpComingMovies)

  if(error){
    console.log(error)
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
            { data.results.map( (item, index) => (
                <MovieCard key={index} item={item} type="movie"/>
            ))}
            </div>
            )
        }
    </>
  
  )
}
