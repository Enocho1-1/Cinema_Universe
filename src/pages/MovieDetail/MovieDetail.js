/* eslint-disable */
import { useEffect,useState } from "react"
import { useParams } from "react-router"
import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Header, MobileHeader } from "../../components"

export const MovieDetail = () => {

    const [data] = useState(JSON.parse(sessionStorage.getItem("type")))
    const Params = useParams() 
    const {myQuery} = useMatchMedia()
    const movie_id = Params.id

    useEffect(() => {
      try{
        const fetchData = async () => {
          const type = data === "MOVIE" ? `https://api.themoviedb.org/3/movie/${movie_id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a` : `https://api.themoviedb.org/3/tv/${movie_id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a`
          const response = await fetch(type)
          const result = await response.json()
          console.log(result)
        }
        fetchData()
      }catch(error){
        console.log(error)
      }
      
    },[])

    console.log(data)
  return (
    <main className="relative overflow-x-hidden h-screen w-screen bg-primary-black">
         { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

    </main>
  )
}
