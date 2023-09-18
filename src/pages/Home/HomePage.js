/* eslint-disable */
import { useState, useEffect } from "react"
import { DefaultCarousel } from "./components/DefaultCarousel"
import { Loader,Header } from "../../components/index"



export const HomePage = () => {

  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      setLoad(!load);
    },4000)
  },[])


  return (
    <main className="reltive overflow-x-hidden h-screen w-screen">
        { load && <Loader/>}
          <Header/>
        < DefaultCarousel/>
    </main>
  
  )
}
