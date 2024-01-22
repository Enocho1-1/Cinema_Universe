/* eslint-disable */
import { useEffect,useState } from "react"
import { useParams } from "react-router"
import { useMatchMedia,useTitle,useUpdateUser} from "../../hooks/index"
// import { useWatch } from "../../context/WatchContext"
// import { updateWatchList } from "../../utility"
import { fetchMovieOrTV,fetchRecommended } from "../../utility"
import { Recommend,VideoPlayer,MovieTVInfo } from "./components/index"
import { Header, MobileHeader,Loader } from "../../components"


export const MovieDetail = () => {

    const [data] = useState(JSON.parse(sessionStorage.getItem("type")))
    const [isShown, setIsShown] = useState(true)
    const [info, setInfo] = useState([])
    const [recommendList , setRecommend] = useState([])
    const Params = useParams() 
    const movie_id = Params.id
    const {myQuery} = useMatchMedia(769)


    useEffect(() => {
 
      try{
       fetchMovieOrTV(data,movie_id,setIsShown,setInfo)
       fetchRecommended(data,movie_id,setRecommend)
      }catch(error){
        throw new Error(error.message)
      }
      
    },[movie_id])


    const {title, name,backdrop_path} = info

    useTitle(`Cinema Universe | ${title ? title : name}`)
     // Update User Watch List Hook
     useUpdateUser()



  return (
    <main className="relative overflow-x-hidden h-screen w-screen bg-primary-black">
         { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}
            {isShown && <Loader/>}
            {/* Header Image & Video Player */}
            <VideoPlayer backdrop={backdrop_path}/>

            <section className="my-10 flex justify-evenly max-mobile:my-8 max-lg:flex-col  p-2 ">
              {/* Movie/TV Info */}
              <MovieTVInfo info={info} type={data} />
              {/* Recommended */}
              <Recommend list={recommendList} type={data}/>
            </section>
    </main>
  )
}
