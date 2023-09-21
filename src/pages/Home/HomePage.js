/* eslint-disable */
import { useState, useEffect } from "react"
import { DefaultCarousel } from "./components/DefaultCarousel"
import { Trending } from "./components/Trending"
import { Header, MobileHeader } from "../../components/index"



export const HomePage = () => {

  const [myQuery, seyMyQuery ] = useState({
    matches: window.innerWidth < 769 ? true : false
  })

  useEffect(() => {
    let mediaQuery = window.matchMedia("(max-width:769px)")
    mediaQuery.addEventListener("change",  seyMyQuery)
  },[])




  return (
    <main className="relative overflow-x-hidden h-screen w-screen bg-primary-black">
        { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}
        
        {/* Carousel */}
        < DefaultCarousel/>

        {/* Trending Section */}
        <section className="mt-8 m-auto max-w-7xl flex flex-col items-center">
          <h1 className=" font-sans font-semibold text-xl text-gray-300"><i className="bi bi-fire"></i>Trending Now<i className="bi bi-fire"></i></h1>
          <Trending />
        </section>
    </main>
  
  )
}
