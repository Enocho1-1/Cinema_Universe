
import { useQuery } from "react-query"
import { TrendingBtn } from "./TrendingBtn"
import { Loader } from "../../../components/index"
import { fetchTrending } from "../../../utility/DataServices"

export const Trending = () => {

    // Async Function
    fetchTrending()
    // Use Query Initialize
    const { isLoading, error, data} = useQuery("trending",  fetchTrending)

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
