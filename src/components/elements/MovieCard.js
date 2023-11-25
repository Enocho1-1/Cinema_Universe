import { useWatch } from "../../context/WatchContext"
import { Link } from "react-router-dom"
import collage from "../../assets/collage.jpg"
import bookmark_blue from "../../assets/bookmark-blue.png"

export const MovieCard = ({item, type=""}) => {
    const { state,saveMovie_TV_type } = useWatch()
    const {id, title, name, release_date,first_air_date, poster_path,media_type} = item

    const posterImage = `https://image.tmdb.org/t/p/original/${poster_path}`
    const itemInWatchList = state.list.find(movie => movie.id === item.id)

   
  return (
    <span className="MovieCard relative max-w-[200px] mx-4">
        { itemInWatchList && (<img className="absolute top-2 right-2 h-4 w-4" src={bookmark_blue} alt="" />)}
        <Link to={`/${id}`} onClick={() => saveMovie_TV_type(`${type ? type : media_type}`)} className="h-[250px] w-[170px] rounded-xl">
            <img className="rounded-xl" src={ poster_path ? posterImage: collage} alt="" />
        </Link>
        <aside className="mt-2 flex flex-col">
            <div className="flex max-w-auto">
                { type ? (<p className=" px-2 text-sm rounded-xl border border-gray-300  text-gray-300">{type}</p>) : (<p className=" px-2 text-sm rounded-xl border border-gray-300  text-gray-300">{media_type}</p>)}
             
                <p className="ml-3 text-md text-gray-300">{release_date ? release_date : first_air_date}</p>
            </div>
            <div className="mt-2">
                    <h1 className="max-w-[150px] ml-2 text-md text-gray-300 hover:cursor-pointer truncate overflow-hidden ..." title={title ? title : name}>{title ? title : name}</h1>
            </div>
        </aside>
    </span>
  )
}
