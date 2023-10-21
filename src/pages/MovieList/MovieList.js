
/* eslint-disable */
import { useState, useEffect } from "react"
import { useMovieList,useTitle,useMatchMedia } from "../../hooks/index"
import { Pagination } from "./component/Pagination"
import { Header, MobileHeader, Footer, Loader, MovieCard } from "../../components"
import play from "../../assets/play-button.png"

export const MovieList = ({apiPath, title, type}) => {
  const [page, setPage ] = useState(1)
  const [postperPage] = useState(15)
  const {myQuery} = useMatchMedia(870)
  useTitle( `Cinema Universe | ${title}`)

  useEffect(() => { setPage(1) },[apiPath])

  // Async Function Movie/TV List
  const { combineData } = useMovieList(apiPath)

  const lastIndex = page * postperPage
  const firstIndex = lastIndex - postperPage
  const list = combineData.slice(firstIndex,lastIndex)

  const changePage = (number) => {
    setPage(number)
  }

  return (
    <main className="relative overflow-x-hidden h-screen w-screen bg-primary-black" >
      { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}
      <section className=" max-w-7xl m-auto mt-[100px]">
        <header className="movieList p-4">
          <h1 className="font-bold text-4xl text-gray-300 flex justify-start ml-6 max-tablet:justify-center"><img src={play} className="h-8 self-center mr-2"/>{title}</h1>
        </header>

        {/* Movie/TV List */}
        {combineData.length === 0 ? <Loader/> : (
            <div className="mt-8 px-4 grid grid-cols-fiveCols max-mobile:grid-cols-twoCols mobile:max-mobileLg:grid-cols-threeCols mobileLg:max-tablet:grid-cols-fourCols gap-y-6 place-content-center">
            { list.map((item, index) => (
              <MovieCard key={index} item={item} type={type}/>
            ))}
          </div>
        )}
      </section>
        < Pagination list={combineData.length} postperPage={postperPage} changePage={changePage} />
      {/* Footer */}
      <Footer/>
    </main>
  )
}
