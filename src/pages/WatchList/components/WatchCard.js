import { useWatch } from "../../../context/WatchContext"
import { Link } from "react-router-dom"
import collage from "../../../assets/collage.jpg"

export const WatchCard = ({item}) => {

    const { removeFromWatchlist } = useWatch()
    const {id, title, image,type} = item

    const posterImage = `https://image.tmdb.org/t/p/original/${image}`
    const saveType = (type) => {
        sessionStorage.setItem("type",JSON.stringify(type))
    }
    
  return (
    <span className="MovieCard relative max-w-[170px] mx-4">
        <Link to={`/${id}`} onClick={() => saveType(`${type}`)} className="h-[250px] w-[170px] rounded-xl">
            <img className="rounded-xl" src={ image ? posterImage: collage} alt="" />
        </Link>
        <aside className="mt-2 flex max-lg:flex-col">
            <div className="max-w-xs flex">
                <p className=" px-2 text-sm rounded-xl border border-gray-300  text-gray-300">{type}</p>
                <h1 className="max-w-[100px] ml-2 text-md text-gray-300 hover:cursor-pointer truncate overflow-hidden ..." title={title}>{title}</h1>
            </div>
            <button onClick={() => removeFromWatchlist(item)} className="ml-2 text-red-600"><i className="bi bi-trash3-fill"></i></button>
        </aside>
    </span>
  )
}
