import { useWatch } from "../../../context/WatchContext"
import { Link } from "react-router-dom"
import star from "../../../assets/star.png"

export const TrendingBtn = ({item,type}) => {
    const { saveMovie_TV_type } = useWatch()
    const { id, title, release_date, backdrop_path,vote_average} = item


  return (
    <Link to={`/${id}`} onClick={() => saveMovie_TV_type(type)} className=" relative min-h-[250px] w-[400px] rounded-xl max-tablet: mt-2">
      <div id="trending_overlay"></div>
        <img className="min-h-[100%] w-fit  rounded-xl" src={`https://image.tmdb.org/t/p/original${backdrop_path}`}alt="" />
        <span className="trendingInfo absolute px-2 top-[60%] left-0">
            <h1 className="max-w-[250px] truncate ... font-sans text-md font-bold text-white">{title}</h1>
            <aside className="mt-2 flex">
                <img src={star} className="h-4  self-center" alt="" />
                <p className="ml-2 text-md font-semibold text-white">{Math.floor(vote_average)}/10</p>
                <p className="ml-2 text-md font-semibold text-white">{release_date}</p>
            </aside>
            
        </span>
    </Link>
  )
}
