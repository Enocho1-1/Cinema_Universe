/* eslint-disable */
import { useQuery } from "react-query"
import { useMatchMedia, useTitle } from "../../hooks/index"
import { useNavigate } from "react-router-dom"
import { useWatch } from "../../context/WatchContext"
import { DefaultCarousel,Trending, UpComing, NowPlaying, Popular, TopRated } from "./components/index"
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

           {/* Popular TV Section */}
           <section className="relative mt-[100px]   px-6">
              <div className="max-w-[95%] flex justify-between max-[600px]:flex-col max-[600px]:items-center">
                <h1 className="font-bold text-4xl text-gray-300 flex ml-6 "><img src={play} className="h-8 self-center mr-2"/>Popular</h1>
                <button  onClick={() => navigate(`/TV/Popular`)} className="w-fit max-[600px]:mt-4  px-4 hover:text-primary-blue hover:border-primary-blue hover:bg-primary-blue/25 rounded-3xl border border-gray-400 text-gray-400 text-sm">View More <i className="bi bi-arrow-up-right"></i></button>
              </div>
              <Popular/>
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
