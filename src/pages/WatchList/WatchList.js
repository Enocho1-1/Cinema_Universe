
import { useMatchMedia,useTitle } from "../../hooks/index"
import { useWatch } from "../../context/WatchContext"
import { Header, MobileHeader } from "../../components/index"
import { WatchCard } from "./components/WatchCard"
import play from "../../assets/play-button.png"
export const WatchList = ({title}) => {

    const { list,dispatch } = useWatch()
    useTitle( `Cinema Universe | ${title}`)
    const {myQuery} = useMatchMedia(870)
  return (
    <main className="relative overflow-x-hidden h-screen bg-primary-black">
        { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

        <section className=" max-w-7xl m-auto mt-[100px]">
          <header className="movieList relative flex">
            <h1 className="font-bold text-4xl text-gray-300 flex justify-start ml-6 max-tablet:justify-center"><img src={play} className="h-8 self-center mr-2" alt="logo"/>{title}</h1>
            <button onClick={() => dispatch({type:"CLEAR"})} className="absolute right-[8%] p-2 text-gray-200 rounded-lg font-sans font-semibold bg-primary-blue hover:bg-secondary-blue">Clear All</button>
          </header>

          <aside className="mt-8 px-4 grid grid-cols-fiveCols max-mobile:grid-cols-twoCols mobile:max-mobileLg:grid-cols-threeCols mobileLg:max-tablet:grid-cols-fourCols gap-y-4 place-content-center">
            { list.map((item,index) => (
              <WatchCard key={index} item={item} />
            ))}
          </aside>
         </section>

    </main>
  )
}
