/* eslint-disable */
import { useEffect,useState } from "react"
import { useParams } from "react-router"
import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Header, MobileHeader } from "../../components"
import collage from "../../assets/movieCollage.jpg"
import play from "../../assets/play-button.png"
import gif from "../../assets/giphy(2).gif"

export const MovieDetail = () => {

    const [data] = useState(JSON.parse(sessionStorage.getItem("type")))
    const [info, setInfo] = useState([])
    const [playbutton, setPlayButton] = useState(false)
    const Params = useParams() 
    const movie_id = Params.id
    const {myQuery} = useMatchMedia()
   

    useEffect(() => {
      try{
        const fetchData = async () => {
          const type = data === "MOVIE" ? `https://api.themoviedb.org/3/movie/${movie_id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a` : `https://api.themoviedb.org/3/tv/${movie_id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a`
          const response = await fetch(type)
          const result = await response.json()
          setInfo(result)
        }
        fetchData()
      }catch(error){
        console.log(error)
      }
      
    },[])

    const {id, title, name, release_date,first_air_date, poster_path,backdrop_path} = info
    const backdropImage = `https://image.tmdb.org/t/p/original/${backdrop_path}`
    const posterImage = `https://image.tmdb.org/t/p/original/${poster_path}`
  return (
    <main className="relative overflow-x-hidden h-screen w-screen bg-primary-black">
         { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

            {/* Header Image */}
            <section className="relative h-[85%] w-full" style={ {
                    backgroundImage: `url( ${backdropImage ? backdropImage : collage})`,
                    backgroundSize:"cover",
                    backgroundRepeat: "no-repeat"
            }}>
                <aside  className="relative flex justify-center items-center" id="overlay">

                  <button onClick={() => setPlayButton(!playbutton)} className=""><img src={play} className="h-[35px] w-[35px]" alt="" /></button>
                  { playbutton && 
                    <div className="absolute top-[25%]  h-[500px] w-[900px] flex justify-center items-center bg-black">
                      <img src={gif} alt="" />
                    </div>
                  }
                

                </aside>
              </section>

              {/* Movie/TV Info */}
           
              <section></section>
            
         
        
    </main>
  )
}
