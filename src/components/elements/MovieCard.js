import { Link } from "react-router-dom"
import collage from "../../assets/collage.jpg"

export const MovieCard = ({item, type=""}) => {
    const {id, title, name, release_date,first_air_date, poster_path,media_type} = item

    const posterImage = `https://image.tmdb.org/t/p/original/${poster_path}`

    const saveType = (type) => {
        sessionStorage.setItem("type",JSON.stringify(type))
    }
    
  return (
    <span className="MovieCard relative max-w-[170px] mx-4">
        <Link to={`/${id}`} onClick={() => saveType(`${type ? type : media_type}`)} className="h-[250px] w-[170px] rounded-xl">
            <img className="rounded-xl" src={ poster_path ? posterImage: collage} alt="" />
        </Link>
        <aside className="mt-2 flex flex-col">
            <div className="flex max-w-auto">
                { type ? (<p className=" px-2 text-sm rounded-xl border border-gray-300  text-gray-300">{type}</p>) : (<p className=" px-2 text-sm rounded-xl border border-gray-300  text-gray-300">{media_type}</p>)}
             
                <p className="ml-3 text-md text-gray-300">{release_date ? release_date : first_air_date}</p>
            </div>
            <div className="mt-2">
                    <h1 className="ml-2 text-md text-gray-300 hover:cursor-pointer">{title ? title : name}</h1>
            </div>
        </aside>
    </span>
  )
}
