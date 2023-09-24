import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Header, MobileHeader } from "../../components"

export const MovieList = ({apiPath, title}) => {
  const {myQuery} = useMatchMedia()

  console.log(`${apiPath} and ${title}`)
  return (
    <main className="relative overflow-x-hidden h-screen w-screen bg-primary-black">
    { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

    </main>
  )
}
