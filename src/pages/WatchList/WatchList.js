/* eslint-disable */
import { useEffect } from "react"
import { useMatchMedia,useTitle} from "../../hooks/index"
import { useWatch } from "../../context/WatchContext"
import { Header, MobileHeader } from "../../components/index"
import { updateWatchList } from "../../utility"
import { WatchCard,EmptyList } from "./components/index"
import play from "../../assets/play-button.png"

export const WatchList = ({title}) => {

    useTitle( `Cinema Universe | ${title}`)
    const {myQuery} = useMatchMedia(870)
    const { dispatch, state, list } = useWatch()
 

    const token = JSON.parse(sessionStorage.getItem("token"))
    const userID = JSON.parse(sessionStorage.getItem("userID"))
    const email = JSON.parse(sessionStorage.getItem("username"))

    const userList = {
      id:userID,
      userToken: token,
      userEmail: email ,
      list: list
    }

    const options = {
      method: "PUT",
      headers:{"Content-Type": "application/json", Authorization: `Bearer ${token}`},
      body:JSON.stringify(userList)
  }


    useEffect(() => {
        // user watch list object
        updateWatchList(userID,options)
     
      },[list])


  return (
    <main className="relative overflow-x-hidden h-screen bg-primary-black">
        { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}

        <section className=" max-w-7xl m-auto mt-[100px]">
          <header className="movieList relative flex">
            <h1 className="font-bold text-4xl text-gray-300 flex justify-start ml-6 max-tablet:justify-center"><img src={play} className="h-8 self-center mr-2" alt="logo"/>{title}</h1>
            <button onClick={() => dispatch({type:"CLEAR"})} className="absolute right-[8%] p-2 text-gray-200 rounded-lg font-sans font-semibold bg-primary-blue hover:bg-secondary-blue">Clear All</button>
          </header>
            {/* Filter Buttons */}
            <aside className="watchFilter min-h-[50px] max-w-lg m-auto my-6 py-2 flex justify-center">
              <span onClick={() => dispatch({type:"ALL"})} className=" font-sans font-semibold text-gray-300 text-xl hover:cursor-pointer hover:text-primary-blue mx-4">ALL</span>
              <span onClick={() => dispatch({type:"ALL_MOVIES", payload:{value:!state.movie}})} className="font-sans font-semibold text-gray-300 text-xl hover:cursor-pointer hover:text-primary-blue mx-4">MOVIES</span>
              <span onClick={() => dispatch({type:"ALL_TV", payload:{value:!state.tv}})} className="font-sans font-semibold text-gray-300 text-xl hover:cursor-pointer hover:text-primary-blue mx-4">TV</span>
            </aside>

              {list.length === 0 ? <EmptyList/> : ( <aside className="mt-12 px-4 grid grid-cols-fiveCols max-mobile:grid-cols-twoCols mobile:max-mobileLg:grid-cols-threeCols mobileLg:max-tablet:grid-cols-fourCols gap-y-6 place-content-center"> {  list.map((item,index) => (<WatchCard key={index} item={item} />))}</aside>)}
           
         </section>

    </main>
  )
}
