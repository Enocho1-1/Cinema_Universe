import { useEffect,useState } from "react"
import { MovieCard } from "../../../components/index"

export const NowPlaying = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        try{
            const fetchData = async () => {
                const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b80d59c33d6d57ed9c7e3713f91c188a')
                const result = await response.json()
                const array = result.results.slice(0,14)
               setData(array)
            }
            fetchData()
        } catch(error){
            console.log(error)
        }
    }, [])

    // console.log(data)
  return (
    <div className="grid mt-[25px] px-4 grid-cols-sevenCols justify-center max-mobile:flex max-mobile:flex-col max-mobile:items-center mobile:max-[600px]:grid-cols-twoCols min-[600px]:max-lg:grid-cols-threeCols  gap-x-[2px] gap-y-2 ">
    { data.map( (item, index) => (
        <MovieCard key={index} item={item} type="MOVIE"/>
    ))}
</div>
  )
}
