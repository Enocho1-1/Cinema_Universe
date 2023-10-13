/* eslint-disable */
import { useQuery } from "react-query"
import { useMatchMedia,useTitle,useUpdate } from "../../hooks/index"
import { useWatch } from "../../context/WatchContext"
import { Header, MobileHeader } from "../../components/index"
import { WatchCard,EmptyList } from "./components/index"
import play from "../../assets/play-button.png"

export const WatchList = ({title}) => {

    useTitle( `Cinema Universe | ${title}`)
    const {state,dispatch } = useWatch()
    const {myQuery} = useMatchMedia(870)
    const token = JSON.parse(sessionStorage.getItem("token"))
    const userID = JSON.parse(sessionStorage.getItem("userID"))

    // Update User Watch List Hook
    useUpdate()

    const options = {
      method: 'GET',
      headers:{ "Content-Type": "application/json", Authorization: `Bearer ${token}`}
    }

    // Fetch Watch List
    const fetchWatchList = async () => {
      try{
          const response = await fetch(`http://localhost:34000/660/orders/${userID}`, options)
          if(!response.ok){
              throw new Error(`${response.status}`)
          } else {
              const result = await response.json()
              return result
          }

      }catch(error){
          throw new Error(error.message)
      }
  }

    const { isLoading, data} = useQuery("watchList", fetchWatchList)
  

  return (
    <main className="relative overflow-x-hidden h-screen bg-primary-black">
        { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

        <section className=" max-w-7xl m-auto mt-[100px]">
          <header className="movieList relative flex">
            <h1 className="font-bold text-4xl text-gray-300 flex justify-start ml-6 max-tablet:justify-center"><img src={play} className="h-8 self-center mr-2" alt="logo"/>{title}</h1>
            <button onClick={() => dispatch({type:"CLEAR"})} className="absolute right-[8%] p-2 text-gray-200 rounded-lg font-sans font-semibold bg-primary-blue hover:bg-secondary-blue">Clear All</button>
          </header>
            {/* Filter Buttons */}
            {/* <aside className="watchFilter min-h-[50px] max-w-lg m-auto my-6 py-2 flex justify-center">
              <span onClick={() => dispatch({type:"ALL"})} className=" font-sans font-semibold text-gray-300 text-xl hover:cursor-pointer hover:text-primary-blue mx-4">ALL</span>
              <span onClick={() => dispatch({type:"ALL_MOVIES", payload:{value:!state.movie}})} className="font-sans font-semibold text-gray-300 text-xl hover:cursor-pointer hover:text-primary-blue mx-4">MOVIES</span>
              <span onClick={() => dispatch({type:"ALL_TV", payload:{value:!state.tv}})} className="font-sans font-semibold text-gray-300 text-xl hover:cursor-pointer hover:text-primary-blue mx-4">TV</span>
            </aside> */}

            <aside className="mt-12 px-4 grid grid-cols-fiveCols max-mobile:grid-cols-twoCols mobile:max-mobileLg:grid-cols-threeCols mobileLg:max-tablet:grid-cols-fourCols gap-y-6 place-content-center">
              { isLoading || data.list.length === 0 ? <EmptyList/> : data.list.map((item,index) => (
                <WatchCard key={index} item={item} />
              ))}
            </aside>
         </section>

    </main>
  )
}
