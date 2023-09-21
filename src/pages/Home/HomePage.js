/* eslint-disable */
import { useMatchMedia, useTitle } from "../../hooks/index"
import { DefaultCarousel } from "./components/DefaultCarousel"
import { Trending } from "./components/Trending"
import { UpComing } from "./components/UpComing"
import { Header, MobileHeader } from "../../components/index"
import play from "../../assets/play-button.png"



export const HomePage = () => {

  useTitle("Cinema Universe | Watch Movies and TV Shows")

  const {myQuery} = useMatchMedia()

  return (
    <main className="relative overflow-x-hidden h-screen w-screen bg-primary-black">
        { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

        {/* Carousel */}
        < DefaultCarousel/>

        {/* Trending Section */}
        <section className="mt-8 m-auto max-w-9xl flex flex-col items-center">
          <h1 className=" font-sans font-semibold text-xl text-gray-300"><i className="bi bi-fire"></i>Trending Now<i className="bi bi-fire"></i></h1>
          <Trending />
        </section>

        {/* Upcoming Section */}
        <section className="relative mt-28 m-auto max-w-9xl px-4">
          <h1 className=" mb-4  font-bold  text-4xl text-gray-300 flex"> <img src={play} className="h-8 self-center mr-2"/>UPCOMING</h1>
          <UpComing/>
        </section>
    </main>
  
  )
}
