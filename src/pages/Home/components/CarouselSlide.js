/* eslint-disable */
import { useWatch } from "../../../context/WatchContext";
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';
import star from "../../../assets/star.png"
import play from "../../../assets/play-button(1).png"
import bookmark from "../../../assets/bookmark-white.png"

export const CarouselSlide = ({item,type}) => {

    const { addToWatchlist } = useWatch()
    const {id, title, release_date, backdrop_path,poster_path,vote_average, adult, overview} = item

    // const media_type = JSON.parse(sessionStorage.getItem("type"))

    const watchListItem = {
        id: id,
        title: title,
        image: poster_path,
        type: type 

    }

    const saveType = (type) => {
        sessionStorage.setItem("type",JSON.stringify(type))
    }



  return (
    <figure>
        <img  className="mainImg" src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="..."/>
        <figcaption className="carouselCaption font-sans ">
            <h1 className="font-semibold text-gray-200 text-6xl max-lg:text-3xl ">{title}</h1>
            <aside className="text-md mt-6 max-w-6xl flex max-tablet:justify-center">
                <div className="font-semibold text-sm px-2 rounded-lg bg-primary-blue">HD</div>
                <div className="font-semibold text-sm ml-3 px-2 rounded-lg border border-gray-200 text-gray-200">{ adult ? "R" : "PG-13"}</div>
                <>
                    <img src={star} className="h-4 ml-2 self-center" alt="" />
                    <p className="ml-2 text-sm text-gray-200">{vote_average}/10</p>
                </>
                <p className="ml-2 text-sm text-gray-200">{release_date}</p>
            </aside>

            {/* OverView */}
            <aside className="max-h-60 max-w-4xl mt-4 ">
                <p className="text-gray-200 max-xl:hidden">{overview}</p>
            </aside> 

            {/* Buttons */}
            <aside className="mt-6 max-w-2xl flex max-tablet:justify-center">
                <Link to={`/${id}`} onClick={() => saveType(type)} className="bg-primary-blue rounded-xl p-2 flex items-center">
                    <img src={play} className="h-6" alt="" />
                    <p className="font-semibold text-md ml-2">Watch Now</p> 
                </Link>
          
                <button onClick={() => {addToWatchlist(watchListItem);toast.success(`${type} added to watchlist`)}} className="ml-3 rounded-xl p-2 flex items-center max-tablet:justify-center "> 
                    <img src={bookmark} className="h-6" alt="" />
                    <p className="font-semibold text-md ml-2 text-gray-200">Bookmark</p> 
                </button>
            </aside>

        </figcaption>
    </figure>
  )
}
