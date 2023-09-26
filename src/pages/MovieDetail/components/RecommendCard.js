import { Link } from "react-router-dom"
import collage from "../../../assets/collage.jpg"

export const RecommendCard = ({item}) => {


    const {id,media_type,title,name,poster_path,release_date,first_air_date} = item
    const posterImage = `https://image.tmdb.org/t/p/original/${poster_path}`

 
  return (
    <>
            <Link to={`/${id}`}  className="flex max-w-[300px] rounded-lg mt-2 mx-2 bg-gray-900 hover:cursor-pointer hover:bg-gray-600">
                <img src={poster_path ? posterImage : collage} className="h-[100px]" alt="" />
                <aside className="mt-1 ml-2 flex flex-col">
                    <p className="font-sans text-md text-gray-500">{media_type}/ { release_date ? release_date : first_air_date} </p>
                    <h1 className="mt-2 font-sans text-lg text-gray-200 text-ellipsis overflow-hidden">{title ? title : name}</h1>
                </aside>
            </Link>
    </>

  )
}
