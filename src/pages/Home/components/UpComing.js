import { useQuery } from "react-query"
import { MovieCard } from "../../../components/index"
import { Loader } from "../../../components/index"


export const UpComing = () => {


    const fetchData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b80d59c33d6d57ed9c7e3713f91c188a')
        if(!response.ok){
          throw new Error(`${response.status}`)
        } else{
          const result = await response.json()
          return result
        }
       
    }

      // Use Query Initialize
      const { isLoading, error, data} = useQuery("upcoming", fetchData)

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
            <div className="grid mt-[25px] px-4 grid-cols-sevenCols justify-center max-mobile:flex max-mobile:flex-col max-mobile:items-center mobile:max-[600px]:grid-cols-twoCols min-[600px]:max-lg:grid-cols-threeCols  gap-x-[2px] gap-y-2 ">
            { data.results.map( (item, index) => (
                <MovieCard key={index} item={item} type="movie"/>
            ))}
            </div>
            )
        }
    </>
  
  )
}
