
import { useMatchMedia,useTitle } from "../../hooks/index"
import { Header, MobileHeader } from "../../components/index"
import play from "../../assets/play-button.png"
export const WatchList = ({title}) => {

    useTitle( `Cinema Universe | ${title}`)
    const {myQuery} = useMatchMedia(870)
  return (
    <main className="relative overflow-x-hidden h-screen bg-primary-black">
        { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

        <section className=" max-w-7xl m-auto mt-[100px]">
        <header className="movieList p-4">
          <h1 className="font-bold text-4xl text-gray-300 flex justify-start ml-6 max-tablet:justify-center"><img src={play} className="h-8 self-center mr-2"/>{title}</h1>
        </header>
      </section>

    </main>
  )
}
