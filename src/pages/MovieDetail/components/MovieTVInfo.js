import { useWatch } from "../../../context/WatchContext"
import { useBlurImg } from "../../../hooks"
import { Blurhash } from "react-blurhash"
import star from "../../../assets/star.png"
import bookmark from "../../../assets/bookmark1.png"
import bookmark_blue from "../../../assets/bookmark-blue.png"
import generic from "../../../assets/collage.jpg"
export const MovieTVInfo = ({info,type}) => {
    const {id, title, name, release_date,first_air_date, poster_path,overview,vote_average,number_of_episodes,runtime,production_countries,genres} = info
    const { addToWatchlist, removeFromWatchlist,list } = useWatch()
    const posterImage = poster_path ? (`https://image.tmdb.org/t/p/original/${poster_path}`) : generic

    // Movie/TV Obj Literal
    const watchListItem = {
        id: id,
        title: title ? title : name,
        image: poster_path,
        type: type
    }

    const inWatchList = list.find(item => item.id === watchListItem .id)
    const {imgloaded} = useBlurImg(posterImage)
  return (
    <>
        {
        !imgloaded
        ?
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
        ( <img src={posterImage} className="h-fit w-[300px] mr-10 rounded-lg max-xl:hidden"  loading="lazy" alt="movie-poster" />)
      }
       

        <div className="flex flex-col max-w-4xl max-lg:justify-center lg:justify-center">
          <aside className="flex max-mobile:justify-around mobile:justify-between ">
            <h1 className="2xl:max-w-[43.75rem]  mobile:max-2xl:max-w-[31.25rem] max-mobile:max-w-[17.188rem] font-sans font-semibold text-3xl  text-gray-200">{title ? title : name}</h1>
            { inWatchList ? (<button onClick={() => removeFromWatchlist(watchListItem)}> <img src={bookmark_blue} className="h-6 pr-8" alt="" /></button>) : (<button onClick={() => addToWatchlist(watchListItem)}> <img src={bookmark} className="h-6 pr-8" alt="" /></button>)}
          </aside>


          <aside className="text-md mt-10 max-w-6xl flex max-mobile:flex-col max-mobile:items-center">
            <div>
              <span className="font-semibold w-fit text-sm px-1 rounded-lg bg-primary-blue">HD</span>
              <span className="font-semibold text-sm ml-3 w-fit px-2 rounded-lg border border-gray-200 text-gray-200">PG-13</span>
            </div>
            
            <div className="flex max-mobile:mt-4">
                <>
                    <img src={star} className="h-4 ml-2 extraSm:self-center " alt="" />
                    <p className="ml-2 text-sm max-extraSm:text-xs text-gray-200">{(Math.floor(vote_average))}/10</p>
                </>
                <p className="ml-2 text-sm max-extraSm:text-xs text-gray-200">{release_date ? release_date : first_air_date}</p>
                <p className="ml-2 text-sm max-extraSm:text-xs text-gray-200">Duration:{number_of_episodes ? ` ${number_of_episodes} episodes`: ` ${runtime} min`}</p>
            </div>
            
           </aside>

          {/* Movie/TV Overview */}
          <aside className="max-w-4xl ">
            <p className="mt-4 font-sans text-md text-gray-200">
              {overview}
            </p>
          </aside>
        

          {/* Listing Info */}
          <aside className="flex flex-col  mt-4 max-w-4xl mx-2">
            {/* Countries */}
            <div className="flex max-mobile:flex-col  text-gray-200">
              <h1 className="font-sans text-md flex"> Countries: </h1>
              <span className="flex flex-wrap">
                {production_countries ? production_countries.map((item, index) => ( <p key={index} className="font-sans mx-1 text-md">{item.name},</p>)): ""}
              </span>
            </div>
            
            {/* Genres */}
            <div className="flex max-mobile:flex-col  mt-2 text-gray-200">
              <h1 className="font-sans text-md"> Genres: </h1>
              <span className="flex flex-wrap">
                {genres ? genres.map((item, index) => ( <p key={index} className="font-sans mx-1 text-md">{item.name},</p>)): ""}
              </span>
            </div>
          </aside>
        </div>
    </>
    
  )
}
