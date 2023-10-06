import { Link } from "react-router-dom"

export const WatchCard = ({item}) => {

    const {id, title, name, poster_path} = item
    const type = JSON.parse(sessionStorage.getItem("type")) || ""

    const saveType = (type) => {
        sessionStorage.setItem("type",JSON.stringify(type))
    }
    
  return (
    <span className="MovieCard relative max-w-[170px] mx-4">
    {/* <Link to={`/${id}`} onClick={() => saveType(`${type}`)} className="h-[250px] w-[170px] rounded-xl">
        <img className="rounded-xl" src={ poster_path ? posterImage: collage} alt="" />
    </Link>
    <aside className="mt-2 flex flex-col">
        <div className="flex max-w-auto">
            <p className=" px-2 text-sm rounded-xl border border-gray-300  text-gray-300">{type}</p>
        </div>
        <div className="mt-2">
                <h1 className="ml-2 text-md text-gray-300 hover:cursor-pointer">{title ? title : name}</h1>
        </div>
    </aside> */}
    </span>
  )
}
