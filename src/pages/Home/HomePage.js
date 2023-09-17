import { useState, useEffect } from "react"
import { Loader } from "../../components/index"

export const HomePage = () => {

  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      setLoad(!load);
    },4000)
  },[])


  return (
    <main className="relative h-screen w-screen">
        { load && <Loader/>}
        <div>HomePage</div>
    </main>
  
  )
}
