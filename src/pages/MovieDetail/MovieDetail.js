/* eslint-disable */
import { useParams } from "react-router"
import { useMatchMedia,useTitle,useUpdateUser,useMovieTV } from "../../hooks/index"
import { Recommend,VideoPlayer,MovieTVInfo } from "./components/index"
import { Header, MobileHeader,Loader } from "../../components"


export const MovieDetail = () => {

    const Params = useParams() 
    const movie_id = Params.id
    const {myQuery} = useMatchMedia(769)

    // Use Movie,TV,Recommended Hook
    const {info,recommend,type:data} = useMovieTV(movie_id)
    const {title, name,backdrop_path} = info

    useTitle(`Cinema Universe | ${title ? title : name}`)
     // Update User Watch List Hook
     useUpdateUser()



  return (
    <main className="relative overflow-x-hidden h-screen w-screen bg-primary-black">
         { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}
            {info.length && <Loader/>}
            {/* Header Image & Video Player */}
            <VideoPlayer backdrop={backdrop_path}/>

            <section className="my-10 flex justify-evenly max-mobile:my-8 max-lg:flex-col  p-2 ">
              {/* Movie/TV Info */}
              <MovieTVInfo info={info} type={data} />
              {/* Recommended */}
              <Recommend list={recommend} type={data}/>
            </section>
    </main>
  )
}
