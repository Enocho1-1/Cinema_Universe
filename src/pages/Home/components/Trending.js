
import { useQuery } from "react-query"
import { TrendingBtn } from "./TrendingBtn"
import { Loader } from "../../../components/index"

export const Trending = () => {

    // Async Function
    const fetchData = async () => {
              
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b80d59c33d6d57ed9c7e3713f91c188a')
        if(!response.ok){
            throw new Error(`${response.status}`)
          } else{
            const result = await response.json()
            const array = result.results.slice(11,15)
            
            return array
          }
        
    }

    // Use Query Initialize
    const { isLoading, error, data} = useQuery("trending", fetchData)

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
            <div className="trendingBtn my-[30px] px-2 flex justify-around max-tablet:flex-col max-tablet:items-center tablet:max-[1545px]:grid tablet:max-[1545px]:grid-cols-twoCols tablet:max-[1545px]:gap-x-20 tablet:max-[1545px]:place-content-center ">
                { data.map( (item,index) => (
                    <TrendingBtn key={index} item={item} type="movie"/>
                ))}
            </div>
            )
        }
    </>
  )
}
