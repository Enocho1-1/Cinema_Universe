/* eslint-disable */
import { useEffect,useState } from "react"
import { useParams } from "react-router"
import { useMatchMedia} from "../../hooks/index"
import { Recommend } from "./components/Recommend"
import { RecommendCard } from "./components/RecommendCard"
import { Header, MobileHeader } from "../../components"
import collage from "../../assets/movieCollage.jpg"
import play from "../../assets/play-button.png"
import gif from "../../assets/giphy(2).gif"
import star from "../../assets/star.png"

export const MovieDetail = () => {

    const [data] = useState(JSON.parse(sessionStorage.getItem("type")))
    const [info, setInfo] = useState([])
    const [recommendList , setRecommend]  =useState([])
    const [playbutton, setPlayButton] = useState(false)
    const value = 769
    const valueTwo = 1024
    const Params = useParams() 
    const movie_id = Params.id
    const {myQuery} = useMatchMedia(value)

   

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
      
   
    },[movie_id])

        // Recommendation useEffect
        useEffect(() => {
          try{
              const fetchRecommended = async () => {
                  const path = data === "MOVIE" ? `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=b80d59c33d6d57ed9c7e3713f91c188a`: `https://api.themoviedb.org/3/tv/${movie_id}/recommendations?api_key=b80d59c33d6d57ed9c7e3713f91c188a`
                  const response = await fetch(path)
                  const result = await response.json()
                  const array = result.results.slice(0,10)
                  setRecommend(array)
              }
              fetchRecommended()
          }catch(error){
              console.log(error.message)
          }
      },[movie_id])

    const { title, name, release_date,first_air_date, poster_path,backdrop_path,overview,vote_average,number_of_episodes,runtime,production_countries,genres, production_companies} = info



    const backdropImage = `https://image.tmdb.org/t/p/original/${backdrop_path}`
    const posterImage = `https://image.tmdb.org/t/p/original/${poster_path}`


  return (
    <main className="relative overflow-x-hidden h-screen w-screen bg-primary-black">
         { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

            {/* Header Image & Video Player */}
            <section className="relative h-[85%] w-full" style={ {
                    backgroundImage: `url( ${backdrop_path ? backdropImage : collage})`,
                    backgroundSize:"cover",
                    backgroundRepeat: "no-repeat"
            }}>
                <aside  className="relative flex justify-center items-center" id="overlay">

                  <button onClick={() => setPlayButton(!playbutton)} className=""><img src={play} className="h-[35px] w-[35px]" alt="" /></button>
                  { playbutton && 
                  // Video Player
                    <div className="absolute top-[25%]  h-[500px] w-[900px] flex justify-center items-center bg-black">
                      <img src={gif} alt="" />
                    </div>
                  }
                
                </aside>
              </section>

              {/* Movie/TV Info */}
           
              <section className="my-12 flex justify-evenly max-lg:flex-col  p-2 ">
                <img src={poster_path ? posterImage : collage} className="h-[400px] w-[300px] mr-10 rounded-lg max-xl:hidden" alt="" />

                <div className="flex flex-col max-lg:items-center">
                  <h1 className="font-sans font-semibold text-4xl max-xl:text-3xl text-gray-200">{title ? title : name}</h1>

                  <aside className="text-md mt-10 max-w-6xl flex ">

                  <div className="font-semibold text-sm px-2 rounded-lg bg-primary-blue">HD</div>
                  <div className="font-semibold text-sm ml-3 px-2 rounded-lg border border-gray-200 text-gray-200">PG-13</div>
                    <>
                        <img src={star} className="h-4 ml-2 self-center" alt="" />
                        <p className="ml-2 text-sm text-gray-200">{(Math.floor(vote_average))}/10</p>
                    </>
                    <p className="ml-2 text-sm text-gray-200">{release_date ? release_date : first_air_date}</p>
                    <p className="ml-2 text-sm text-gray-200">Duration:{number_of_episodes ? ` ${number_of_episodes} episodes`: ` ${runtime} min`}</p>
                   </aside>

                  <aside className="max-w-4xl">
                    <p className="mt-4 font-sans text-md text-gray-200">
                      {overview}
                    </p>
                  </aside>
                

                  {/* Listing Info */}
                  <aside className="flex flex-col mt-4 max-w-4xl">
                    {/* Countries */}
                    <span className="flex">
                      <h1 className="font-sans text-md text-gray-200 flex"> Countries: {production_countries ? production_countries.map((item, index) => ( <p key={index} className="font-sans mx-1 text-md text-gray-200">{item.name},</p>)): ""}</h1>
                    </span>
                    
                    {/* Genres */}
                    <span className="flex mt-2">
                      <h1 className="font-sans text-md text-gray-200 flex"> Genres: {genres ? genres.map((item, index) => ( <p key={index} className="font-sans mx-1 text-md text-gray-200">{item.name},</p>)): ""}</h1>
                    </span>

                     {/* Production */}
                     <span className="flex mt-2">
                      <h1 className="font-sans text-md text-gray-200 flex"> Production: {production_companies ? production_companies.map((item, index) => ( <p key={index} className="font-sans mx-1 text-md text-gray-200">{item.name},</p>)): ""}</h1>
                    </span>
                  </aside>
                </div>

                {/* Recommended */}
                <Recommend list={recommendList} type={data}/>
      
              </section>
            
         
        
    </main>
  )
}
