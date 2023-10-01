import { useState, useEffect } from "react"
import { useMatchMedia } from "../../hooks"
import { useSearchParams } from "react-router-dom"
import { Header, MobileHeader,MovieCard,Loader, Footer } from "../../components"

export const Search = () => {

    const [data,setData] = useState([])
    const [SearchParams] = useSearchParams()
    const searchTerm = SearchParams.get("query")
    const value = 870
    const {myQuery} = useMatchMedia(value)

    useEffect(() => {
       try{
        const fetchSearch = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=94a1cc264f4c55063be364b9346acc68&query=${searchTerm}&include_adult=false&language=en-US&page=1`)
            const result = await response.json()
            setData(result.results)
        }
        fetchSearch()
       } catch(error){
        console.log('Error', error)
       }
    },[searchTerm])

 
  return (
    <main className="relative overflow-x-hidden h-screen bg-primary-black">
       { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}
        <section className=" max-w-7xl min-h-[90vh] m-auto mt-[100px]">
            <header className="movieList p-4">
                <h1 className="font-bold text-4xl text-gray-300 flex justify-start ml-6 max-tablet:justify-center">Search | "{searchTerm}"</h1>
            </header>

            {/* Movie/TV List */}
            {data.length === 0 ? <Loader/> : (
                <div className="mt-8 px-4 grid grid-cols-fiveCols max-mobile:grid-cols-twoCols mobile:max-mobileLg:grid-cols-threeCols mobileLg:max-tablet:grid-cols-fourCols gap-y-4 place-content-center">
                { data.map((item, index) => (
                    <MovieCard key={index} item={item} type={item.media_type}/>
                ))}
            </div>
            )}
        </section>
        <Footer/>
    </main>
  )
}
