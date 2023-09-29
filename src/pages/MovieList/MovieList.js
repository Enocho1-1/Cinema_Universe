
/* eslint-disable */
import { useState } from "react"
import { useFetch,useFetchTwo,useFetchThree,useTitle,useMatchMedia } from "../../hooks/index"
import { Header, MobileHeader, Footer, Loader, MovieCard } from "../../components"
import play from "../../assets/play-button.png"

export const MovieList = ({apiPath, title, type}) => {
  const [page, setPage ] = useState(1)
  const [postperPage] = useState(15)
  const value = 870
  const {myQuery} = useMatchMedia(value)
  useTitle( `Cinema Universe | ${title}`)


  const {data : dataOne} = useFetch(apiPath)
  const {data : dataTwo} = useFetchTwo(apiPath)
  const {data : dataThree} = useFetchThree(apiPath)

  const combineData = [...dataOne,...dataTwo, ...dataThree]

  const lastIndex = page * postperPage
  const firstIndex = postperPage - lastIndex
  const list = combineData.slice(firstIndex,lastIndex)

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <main className="relative overflow-x-hidden h-screen w-screen bg-primary-black">
      { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}
      <section className=" max-w-7xl m-auto mt-[100px]">
        <header className="movieList p-4">
          <h1 className="font-bold text-4xl text-gray-300 flex justify-start ml-6 max-tablet:justify-center"><img src={play} className="h-8 self-center mr-2"/>{title}</h1>
        </header>

        {/* Movie/TV List */}
        {combineData.length === 0 ? <Loader/> : (
            <div className="mt-8 px-4 grid grid-cols-fiveCols max-mobile:grid-cols-twoCols mobile:max-mobileLg:grid-cols-threeCols mobileLg:max-tablet:grid-cols-fourCols gap-y-4 place-content-center">
            { list.map((item, index) => (
              <MovieCard key={index} item={item} type={type}/>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer/>
    </main>
  )
}
