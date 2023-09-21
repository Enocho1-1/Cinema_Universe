
import { Link } from "react-router-dom"
import star from "../../../assets/star.png"

export const TrendingBtn = ({item}) => {
    const { id, title, release_date, backdrop_path,vote_average} = item
  return (
    <Link to={`/${id}`} className=" relative h-[165px] w-[350px] rounded-xl mx-4 mt-8">
        <img className="h-fit w-fit  rounded-xl z-[-10]" src={`https://image.tmdb.org/t/p/original${backdrop_path}`}alt="" />
        <span className="absolute px-2 top-[60%] left-0">
            <h1 className="font-sans text-md font-bold text-white">{title}</h1>
            <aside className="m-2 flex">
                <img src={star} className="h-4 ml-2 self-center" alt="" />
                <p className="ml-2 text-md font-semibold text-white">{vote_average}/10</p>
                <p className="ml-2 text-md font-semibold text-white">{release_date}</p>
            </aside>
            
        </span>
    </Link>
  )
}
