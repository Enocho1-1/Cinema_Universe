/* eslint-disable */
import { useQuery } from "react-query"
import { useMatchMedia, useTitle } from "../../hooks/index"
import { useNavigate } from "react-router-dom"
import { useWatch } from "../../context/WatchContext"
import { DefaultCarousel, SectionContainer ,Section_InnerContainer ,Trending, UpComing, NowPlaying, Popular, TopRated } from "./components/index"
import { Header, Footer, MobileHeader } from "../../components/index"
import play from "../../assets/play-button.png"



export const HomePage = () => {

  useTitle("Cinema Universe | Watch Movies and TV Shows")
  const {  addWatchList, retrieveUserData} = useWatch()
  const navigate= useNavigate()
  const{ userID, userToken } = retrieveUserData()

  // Match Media Hook
  const {myQuery} = useMatchMedia(769)

  const options = {
    method: 'GET',
    headers:{ "Content-Type": "application/json", Authorization: `Bearer ${userToken}`}
  }

    // Fetch User Watch List
    const fetchUser = async () => {
      try{
          const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders/${userID}`, options)
          if(!response.ok){
              throw new Error(`${response.status}`)
          } else {
              const result = await response.json()
              addWatchList(result.list)
          }

      }catch(error){
          throw new Error(error.message)
      }
  }

 
   useQuery("watchList", fetchUser)



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
        <section className="relative mt-[75px]  px-6">
          <h1 className="font-bold text-4xl text-gray-300 flex justify-start ml-6 max-tablet:justify-center"><img src={play} className="h-8 self-center mr-2"/>UPCOMING</h1>
          <UpComing/>
        </section>

         {/* Now Playing Movies Section */}
          <SectionContainer >
            <Section_InnerContainer title = "Now Playing" path = '/NowPlaying '/>
            <NowPlaying/>
          </SectionContainer >

           {/* Popular TV Section */}
           <SectionContainer >
              <Section_InnerContainer title = "Popular" path = '/TV/Popular'/>
              <Popular/>
            </SectionContainer >

            {/* Top Rated Section */}
            <section className="relative my-[100px] px-6">
              <Section_InnerContainer title = "TOP RATED" path = '/TV/TopRated'/>
              <TopRated/>
            </section>

            {/* Footer */}
            <Footer/>
    </main>
  
  )
}
