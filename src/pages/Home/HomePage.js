import { useState, useEffect } from "react"
import { Loader,Header } from "../../components/index"



export const HomePage = () => {

  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      setLoad(!load);
    },5000)
  },[])


  return (
    <main className="overflow-x-hidden h-screen w-screen">
        { load && <Loader/>}
        <div >
          <Header/>
        </div>
    </main>
  
  )
}
