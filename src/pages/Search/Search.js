
import { useSearchParams } from "react-router-dom"
export const Search = () => {

    const [SearchParams] = useSearchParams()
    const searchTerm = SearchParams.get("query")
    console.log(searchTerm)
  return (
    <main className="relative overflow-x-hidden h-screen bg-primary-black"></main>
  )
}
