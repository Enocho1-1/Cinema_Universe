/* eslint-disable */
import { useMatchMedia, useTitle } from "../../hooks/index"
import { useNavigate } from "react-router"
import { DefaultCarousel,Trending, UpComing, NowPlaying } from "./components/index"
import { Header, MobileHeader } from "../../components/index"
import play from "../../assets/play-button.png"



export const HomePage = () => {

  useTitle("Cinema Universe | Watch Movies and TV Shows")
  const navigate= useNavigate()

  const {myQuery} = useMatchMedia()

  return (
    <main className="relative overflow-x-hidden h-screen bg-primary-black">
        { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

        {/* Carousel */}
        < DefaultCarousel/>

        {/* Trending Section */}
        <section className="mt-8 m-auto flex flex-col items-center">
          <h1 className=" font-sans font-semibold text-xl text-gray-300 flex justify-center"><i className="bi bi-fire"></i>Trending Now<i className="bi bi-fire"></i></h1>
          <Trending />
        </section>

        {/* Upcoming Section */}
        <section className="relative mt-[175px]  px-6">
          <h1 className="font-bold text-4xl text-gray-300 flex justify-start ml-6 max-tablet:justify-center"><img src={play} className="h-8 self-center mr-2"/>UPCOMING</h1>
          <UpComing/>
        </section>

         {/* Now Playing Section */}
         <section className="relative mt-[100px]  px-6">
          <div className="flex justify-between max-[600px]:flex-col max-[600px]:justify-center ml-6 px-4">
            <h1 className="font-bold text-4xl text-gray-300 flex justify-start max-tablet:justify-center"><img src={play} className="h-8 self-center mr-2"/>Now Playing</h1>
            <button  onClick={() => navigate(`/NowPlaying`)} className="max-[600px]:mt-4  px-4 hover:text-primary-blue hover:border-primary-blue hover:bg-primary-blue/25 rounded-3xl border border-gray-400 text-gray-400 text-sm">View More <i className="bi bi-arrow-up-right"></i></button>
          </div>
          <NowPlaying/>
        </section>
    </main>
  
  )
}
