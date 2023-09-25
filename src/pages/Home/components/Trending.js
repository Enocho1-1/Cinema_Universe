import { useEffect,useState } from "react"
import { TrendingBtn } from "./TrendingBtn"

export const Trending = () => {

    const [data, setData] = useState([])

    
    useEffect(() => {
        try{
            const fetchData = async () => {
              
                const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b80d59c33d6d57ed9c7e3713f91c188a')
                const result = await response.json()
                const array = result.results.slice(11,15)
                setData(array)
            }
            fetchData()
        } catch(error){
            console.log(error)
        }
       
    },[])

  return (
    <div className="trendingBtn my-[30px] px-2 flex justify-around max-[780px]:justify-center flex-wrap">
    { data.map( (item,index) => (
           <TrendingBtn key={index} item={item} type="MOVIE"/>
    ))}
    </div>
  )
}
