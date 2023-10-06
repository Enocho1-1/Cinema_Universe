
import { useMatchMedia,useTitle } from "../../hooks/index"
import { useWatch } from "../../context/WatchContext"
import { Header, MobileHeader } from "../../components/index"
import { WatchCard } from "./components/WatchCard"
import play from "../../assets/play-button.png"
import potter from "../../assets/mermaid.png"
export const WatchList = ({title}) => {

    useTitle( `Cinema Universe | ${title}`)
    const {myQuery} = useMatchMedia(870)
  return (
    <main className="relative overflow-x-hidden h-screen bg-primary-black">
        { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

        <section className=" max-w-7xl m-auto mt-[100px]">
          <header className="movieList p-4">
            <h1 className="font-bold text-4xl text-gray-300 flex justify-start ml-6 max-tablet:justify-center"><img src={play} className="h-8 self-center mr-2" alt="logo"/>{title}</h1>
          </header>

          <aside className="mt-8 px-4 grid grid-cols-fiveCols max-mobile:grid-cols-twoCols mobile:max-mobileLg:grid-cols-threeCols mobileLg:max-tablet:grid-cols-fourCols gap-y-4 place-content-center">
            
          </aside>
         </section>

    </main>
  )
}
