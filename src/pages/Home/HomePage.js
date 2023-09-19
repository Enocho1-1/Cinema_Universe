/* eslint-disable */
import { useState, useEffect } from "react"
import { DefaultCarousel } from "./components/DefaultCarousel"
import { Loader,Header, MobileHeader } from "../../components/index"



export const HomePage = () => {

  const [load, setLoad] = useState(true)
  const [myQuery, seyMyQuery ] = useState({
    matches: window.innerWidth < 769 ? true : false
  })

  useEffect(() => {
    let mediaQuery = window.matchMedia("(max-width:769px)")
    mediaQuery.addEventListener("change",  seyMyQuery)
  },[])

  useEffect(() => {
    setTimeout(()=>{
      setLoad(!load);
    },4000)
  },[])


  return (
    <main className="reltive overflow-x-hidden h-screen w-screen">
        { load && <Loader/>}
        { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}
        < DefaultCarousel/>
    </main>
  
  )
}
