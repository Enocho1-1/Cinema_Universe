/* eslint-disable */
import { useWatch } from "../../../context/WatchContext"
import { Link } from "react-router-dom"
import star from "../../../assets/star.png"
import play from "../../../assets/play-button(1).png"
import generic from "../../../assets/movieCollage.jpg"


export const CarouselSlide = ({item,type}) => {

    const { saveMovie_TV_type } = useWatch()
    const {id, title, release_date, backdrop_path,vote_average, adult, overview} = item
    const backdropImage = backdrop_path
 
  return (
    <figure data-testid="poster-carousel">
        <Link to={`/${id}`} onClick={() => saveMovie_TV_type(type)}>
            <img  className="mainImg" src={backdropImage ? (`https://image.tmdb.org/t/p/original${backdropImage}`) : generic} alt="..."/>
        </Link>
        <figcaption className="carouselCaption font-sans ">
            <h1 className="max-w-6xl font-semibold text-gray-200 text-5xl max-lg:text-3xl ">{title}</h1>
            <aside className="text-md mt-6 max-w-6xl flex max-tablet:justify-center">
                <div className="font-semibold text-sm px-2 rounded-lg bg-primary-blue">HD</div>
                <div className="font-semibold text-sm ml-3 px-2 rounded-lg border border-gray-200 text-gray-200">{ adult ? "R" : "PG-13"}</div>
                <>
                    <img src={star} className="h-4 ml-2 self-center" alt="" />
                    <p className="ml-2 text-sm text-gray-200">{Math.floor(vote_average)}/10</p>
                </>
                <p className="ml-2 text-sm text-gray-200">{release_date}</p>
            </aside>

            {/* OverView */}
            <aside className="max-2xl:max-h-[200px]  2xl:max-h-[250px]  max-xl:hidden max-w-4xl  whitespace-normal mt-4 ">
                <p className=" text-gray-200 max-2xl:line-clamp-2 2xl:line-clamp-4">{overview}</p>
            </aside> 

            {/* Buttons */}
            <aside className="mt-6 max-w-2xl flex max-tablet:justify-center">
                <Link to={`/${id}`} onClick={() => saveMovie_TV_type(type)} className="bg-primary-blue rounded-xl p-2 flex items-center">
                    <img src={play} className="h-6" alt="" />
                    <p className="font-semibold text-md ml-2">Watch Now</p> 
                </Link>
            </aside>

        </figcaption>
    </figure>
  )
}
