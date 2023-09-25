
/* eslint-disable */
import { useFetch,useTitle,useMatchMedia } from "../../hooks/index"
import { Header, MobileHeader } from "../../components"

export const MovieList = ({apiPath, title}) => {
  const {myQuery} = useMatchMedia()
  useTitle( `Cinema Universe | ${title}`)

  const {data} = useFetch(apiPath)
  return (
    <main className="relative overflow-x-hidden h-screen w-screen bg-primary-black">
    { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

    </main>
  )
}
