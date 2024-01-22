/* eslint-disable */
import { useQuery } from "react-query"
import { useMatchMedia, useTitle } from "../../hooks/index"
import { fetchUser } from "../../utility"
import { useWatch } from "../../context/WatchContext"
import { DefaultCarousel, SectionContainer ,SectionTitle ,Trending, UpComing, NowPlaying, Popular, TopRated } from "./components/index"
import { Header, Footer, MobileHeader } from "../../components/index"
import play from "../../assets/play-button.png"



export const HomePage = () => {

  useTitle("Cinema Universe | Watch Movies and TV Shows")
  const {addWatchList, retrieveUserData} = useWatch()

  // Match Media Hook
  const {myQuery} = useMatchMedia(769)

  // Fetch User Watch List
  useQuery("watchList", () =>  fetchUser(addWatchList, retrieveUserData))



  return (
    <main className="relative overflow-x-hidden h-screen bg-primary-black">
        { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

        {/* Carousel */}
        < DefaultCarousel />

        {/* Trending Movies Section */}
        <section className="mt-6 m-auto max-2xl:max-w-[1500px] 2xl:max-w-[1750px]">
          <h1 className="font-sans font-semibold text-xl text-gray-300 text-center"><i className="bi bi-fire"></i>Trending Now<i className="bi bi-fire"></i></h1>
          <Trending />
        </section>

        {/* Upcoming Movies Section */}
        <SectionContainer>
          <h1 className="font-bold text-4xl text-gray-300 flex justify-start ml-6 max-tablet:justify-center"><img src={play} className="h-8 self-center mr-2"/>UPCOMING</h1>
          <UpComing/>
        </SectionContainer>

         {/* Now Playing Movies Section */}
          <SectionContainer >
            <SectionTitle title = "Now Playing" path = '/NowPlaying '/>
            <NowPlaying/>
          </SectionContainer >

           {/* Popular TV Section */}
           <SectionContainer >
              <SectionTitle title= "Popular" path = '/TV/Popular'/>
              <Popular/>
            </SectionContainer >

            {/* Top Rated Section */}
            <SectionContainer>
              <SectionTitle title = "TOP RATED" path = '/TV/TopRated'/>
              <TopRated/>
            </SectionContainer>

            {/* Footer */}
            <Footer/>
    </main>
  
  )
}
