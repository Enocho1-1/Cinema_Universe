import { useState, useEffect } from "react"
import { Loader } from "../../components/index"
import { InitialSecondHead } from "../Initial/components/InitialSecondHead"

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
          <InitialSecondHead/>
        </div>
    </main>
  
  )
}
