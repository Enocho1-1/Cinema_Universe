import { useWatch } from "../../../context/WatchContext"
import { useBlurImg } from "../../../hooks"
import { Blurhash } from "react-blurhash"
import { Link } from "react-router-dom"
import star from "../../../assets/star.png"
import collage from "../../../assets/movieCollage.jpg"

export const TrendingBtn = ({item,type}) => {
    const { saveMovie_TV_type } = useWatch()
    const { id, title, release_date, backdrop_path,vote_average} = item
    const backdropImage = backdrop_path ? (`https://image.tmdb.org/t/p/original${backdrop_path}`) : collage
    const {imgloaded} = useBlurImg(backdropImage)

  return (
    <Link to={`/${id}`} onClick={() => saveMovie_TV_type(type)} className=" relative min-h-[250px] min-w-[400px] max-mobile:min-h-[150px] max-mobile:min-w-[250px]  rounded-xl max-tablet: mt-2">
      {!imgloaded ? 
      (
          <Blurhash
          hash="L45Y4%_NM_IA?w%gV@M_WCazWBae"
          width={200}
          height={250}
          resolutionX={32}
          resolutionY={32}
          punch={1}
      />
      ):
      (
        <>
          <div id="trending_overlay"></div>
          <img className="min-h-[100%] w-fit  rounded-xl" src={backdropImage} alt="movie-poster" />
          <span className="trendingInfo absolute px-2 top-[60%] left-0">
              <h1 className="max-w-[250px] truncate ... font-sans text-md font-bold text-white">{title}</h1>
              <aside className="mt-2 flex">
                  <img src={star} className="h-4  self-center" alt="" />
                  <p className="ml-2 text-md font-semibold text-white">{Math.floor(vote_average)}/10</p>
                  <p className="ml-2 text-md font-semibold text-white">{release_date}</p>
              </aside>
          </span>
        </>
      )  
      }
    
     
    </Link>
  )
}
