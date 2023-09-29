/* eslint-disable */
import { useEffect,useState } from "react"
import { useMatchMedia, useTitle } from "../../hooks/index"
import { useNavigate } from "react-router-dom"
import { DefaultCarousel,Trending, UpComing, NowPlaying, TopRated } from "./components/index"
import { Header, Footer, MobileHeader,Loader } from "../../components/index"
import play from "../../assets/play-button.png"



export const HomePage = () => {

  const [isShown, setIsShown] = useState(true)
  useTitle("Cinema Universe | Watch Movies and TV Shows")

  const value = 769

  useEffect(() => {
    setTimeout(() => {
      setIsShown(!isShown);
    },6000)
  },[])


  const navigate= useNavigate()

  const {myQuery} = useMatchMedia(value)



  return (
    <main className="relative overflow-x-hidden h-screen bg-primary-black">
        {isShown && <Loader/>}
        { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

        {/* Carousel */}
        < DefaultCarousel/>

        {/* Trending Movies Section */}
        <section className="mt-8">
          <h1 className="font-sans font-semibold text-xl text-gray-300 text-center"><i className="bi bi-fire"></i>Trending Now<i className="bi bi-fire"></i></h1>
          <Trending />
        </section>

        {/* Upcoming Movies Section */}
        <section className="relative mt-[175px]  px-6">
          <h1 className="font-bold text-4xl text-gray-300 flex justify-start ml-6 max-tablet:justify-center"><img src={play} className="h-8 self-center mr-2"/>UPCOMING</h1>
          <UpComing/>
        </section>

         {/* Now Playing Movies Section */}
          <section className="relative mt-[100px]   px-6">
            <div className="max-w-[95%] flex justify-between max-[600px]:flex-col max-[600px]:items-center">
              <h1 className="font-bold text-4xl text-gray-300 flex ml-6 "><img src={play} className="h-8 self-center mr-2"/>Now Playing</h1>
              <button  onClick={() => navigate(`/NowPlaying`)} className="w-fit max-[600px]:mt-4  px-4 hover:text-primary-blue hover:border-primary-blue hover:bg-primary-blue/25 rounded-3xl border border-gray-400 text-gray-400 text-sm">View More <i className="bi bi-arrow-up-right"></i></button>
            </div>
            <NowPlaying/>
          </section>

            {/* Top Rated Section */}
            <section className="relative my-[100px] px-6">
              <div className="max-w-[95%] flex justify-between max-[600px]:flex-col max-[600px]:items-center">
                <h1 className="font-bold text-4xl text-gray-300 flex ml-6 "><img src={play} className="h-8 self-center mr-2"/>TOP RATED</h1>
                <button onClick={() => navigate("/TV/TopRated")} className="w-fit max-[600px]:mt-4  px-4 hover:text-primary-blue hover:border-primary-blue hover:bg-primary-blue/25 rounded-3xl border border-gray-400 text-gray-400 text-sm">View More <i className="bi bi-arrow-up-right"></i></button>
              </div>
              <TopRated/>
            </section>

            {/* Footer */}
            <Footer/>
    </main>
  
  )
}
