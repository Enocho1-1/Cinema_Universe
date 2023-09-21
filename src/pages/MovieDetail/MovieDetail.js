/* eslint-disable */
import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Header, MobileHeader } from "../../components"

export const MovieDetail = () => {
    const {myQuery} = useMatchMedia()
  return (
    <main className="relative overflow-x-hidden h-screen w-screen bg-primary-black">
         { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

    </main>
  )
}
