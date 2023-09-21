import { useEffect,useState } from "react"
import { TrendingBtn } from "./TrendingBtn"

export const Trending = () => {
    // const { data } = useFetch("movie/popular")
    const [data, setData] = useState([])

    
    useEffect(() => {
        try{
            const fetchData = async () => {
              
                const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b80d59c33d6d57ed9c7e3713f91c188a')
                const result = await response.json()
                const array = result.results.slice(10,14)
                setData(array )
            }
            fetchData()
        } catch(error){
            console.log(error)
        }
       
    },[])

    console.log(data)
  return (
    <div className="trendingBtn my-[50px] px-2 flex justify-evenly flex-wrap">
    { data.map( (item,index) => (
           <TrendingBtn key={index} item={item}/>
    ))}
   
    
    </div>
  )
}
