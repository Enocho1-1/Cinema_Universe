
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

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 300;
      }

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 300;
    }


  return (
    <div className="flex">
        {
            isLoading 
            ? 
            <Loader/>
            :
            ( 
                <>
                    <div className="my-[0.625rem] p-[0.5rem] relative  flex gap-x-8 overflow-x-hidden overflow-y-hidden max-mobile:overflow-x-scroll" id="slider">
                        { data.map( (item,index) => (
                            <TrendingBtn key={index} item={item} type="movie"/>
                        ))}
                    </div>
                    <div className="btns  mx-4 flex flex-col justify-center">
                        <button className="bg-gray-300 hover:bg-primary-blue py-10 px-[2px] rounded-md right" onClick={slideRight}><i className="bi bi-caret-right-fill"></i></button>
                        <button className="bg-gray-300 hover:bg-primary-blue py-10 px-[2px]  rounded-md mt-2 left" onClick={slideLeft}><i className="bi bi-caret-left-fill"></i></button>
                    </div>
                </> 
            
            )
        }
    </div>
  )
}
