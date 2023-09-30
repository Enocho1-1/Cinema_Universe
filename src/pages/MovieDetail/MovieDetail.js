/* eslint-disable */
import { useEffect,useState } from "react"
import { useParams } from "react-router"
import { useMatchMedia,useTitle } from "../../hooks/index"
import { Recommend,VideoPlayer } from "./components/index"
import { Header, MobileHeader } from "../../components"
import collage from "../../assets/movieCollage.jpg"
import star from "../../assets/star.png"

export const MovieDetail = () => {

    const [data] = useState(JSON.parse(sessionStorage.getItem("type")))
    const [info, setInfo] = useState([])
    const [recommendList , setRecommend]  =useState([])
    const Params = useParams() 
    const movie_id = Params.id
    const value = 769
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
                  const path = data === "MOVIE" || data === "movie" ? `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=b80d59c33d6d57ed9c7e3713f91c188a`: `https://api.themoviedb.org/3/tv/${movie_id}/recommendations?api_key=b80d59c33d6d57ed9c7e3713f91c188a`
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

    const { title, name, release_date,first_air_date, poster_path,backdrop_path,overview,vote_average,number_of_episodes,runtime,production_countries,genres} = info

    useTitle(`Cinema Universe | ${title ? title : name}`)


    const posterImage = `https://image.tmdb.org/t/p/original/${poster_path}`


  return (
    <main className="relative overflow-x-hidden h-screen w-screen bg-primary-black">
         { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

            {/* Header Image & Video Player */}
              <VideoPlayer backdrop={backdrop_path}/>

              {/* Movie/TV Info */}
           
              <section className="my-10 flex justify-evenly max-mobile:my-8 max-lg:flex-col  p-2 ">
                <img src={poster_path ? posterImage : collage} className="h-fit w-[300px] mr-10 rounded-lg max-xl:hidden" alt="" />

                <div className="flex flex-col max-w-4xl max-lg:justify-center lg:justify-center">
                  <h1 className="font-sans font-semibold text-5xl max-mobile:text-center max-xl:text-3xl text-gray-200">{title ? title : name}</h1>

                  <aside className="text-md mt-10 max-w-6xl flex max-mobile:flex-col max-mobile:items-center">
                    <div>
                      <span className="font-semibold w-fit text-sm px-1 rounded-lg bg-primary-blue">HD</span>
                      <span className="font-semibold text-sm ml-3 w-fit px-2 rounded-lg border border-gray-200 text-gray-200">PG-13</span>
                    </div>
                    
                    <div className="flex max-mobile:mt-4">
                        <>
                            <img src={star} className="h-4 ml-2 extraSm:self-center " alt="" />
                            <p className="ml-2 text-sm max-extraSm:text-xs text-gray-200">{(Math.floor(vote_average))}/10</p>
                        </>
                        <p className="ml-2 text-sm max-extraSm:text-xs text-gray-200">{release_date ? release_date : first_air_date}</p>
                        <p className="ml-2 text-sm max-extraSm:text-xs text-gray-200">Duration:{number_of_episodes ? ` ${number_of_episodes} episodes`: ` ${runtime} min`}</p>
                    </div>
                    
                   </aside>

                  {/* Movie/TV Overview */}
                  <aside className="max-w-4xl ">
                    <p className="mt-4 font-sans text-md text-gray-200">
                      {overview}
                    </p>
                  </aside>
                

                  {/* Listing Info */}
                  <aside className="flex flex-col  mt-4 max-w-4xl mx-2">
                    {/* Countries */}
                    <div className="flex max-mobile:flex-col  text-gray-200">
                      <h1 className="font-sans text-md flex"> Countries: </h1>
                      <span className="flex flex-wrap">
                        {production_countries ? production_countries.map((item, index) => ( <p key={index} className="font-sans mx-1 text-md">{item.name},</p>)): ""}
                      </span>
                    </div>
                    
                    {/* Genres */}
                    <div className="flex max-mobile:flex-col  mt-2 text-gray-200">
                      <h1 className="font-sans text-md"> Genres: </h1>
                      <span className="flex flex-wrap">
                        {genres ? genres.map((item, index) => ( <p key={index} className="font-sans mx-1 text-md">{item.name},</p>)): ""}
                      </span>
                    </div>
                  </aside>
                </div>

                {/* Recommended */}
                <Recommend list={recommendList} type={data}/>
      
              </section>
            
         
        
    </main>
  )
}
