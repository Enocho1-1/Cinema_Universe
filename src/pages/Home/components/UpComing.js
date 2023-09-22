import { useEffect,useState } from "react"
import { MovieCard } from "../../../components/index"


export const UpComing = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        try{
            const fetchData = async () => {
                const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b80d59c33d6d57ed9c7e3713f91c188a')
                const result = await response.json()
               setData(result.results)
            }
            fetchData()
        } catch(error){
            console.log(error)
        }
    }, [])

  return (
    <div className="grid mt-[25px] px-4 grid-cols-fiveCols justify-center max-mobile:flex max-mobile:flex-col max-mobile:items-center mobile:max-[600px]:grid-cols-twoCols min-[600px]:max-lg:grid-cols-threeCols grid-rows-4 gap-x-[2px] gap-y-2 ">
       
        { data.map( (item, index) => (
            <MovieCard key={index} item={item} type="MOVIE"/>
        ))}
    </div>
  )
}
