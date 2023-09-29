import { Link } from "react-router-dom"
import star from "../../../assets/star.png"

export const MobileTrendingBtn = ({item,type}) => {
    const { id, title, release_date, backdrop_path,vote_average} = item
    const backdropImage = `https://image.tmdb.org/t/p/original${backdrop_path}`
    const saveType = (type) => {
      sessionStorage.setItem("type",JSON.stringify(type))
  }
  return (
    <Link to={`/${id}`} onClick={() => saveType(type)} className=" relative rounded-xl mx-4 max-tablet: mt-12">
        <div className="relative  rounded-xl" style={{
            backgroundImage:`url(${backdropImage})`,
            backgroundSize:"contain",
            backgroundRepeat: "no-repeat",
            height: "200px",
            width:"300px"
        }}>
            <span className="absolute px-2 top-[30%] left-0">
                <h1 className="font-sans text-md font-bold text-white">{title}</h1>
                <aside className="m-2 flex">
                    <img src={star} className="h-4 ml-2 self-center" alt="" />
                    <p className="ml-2 text-md font-semibold text-white">{vote_average}/10</p>
                    <p className="ml-2 text-md font-semibold text-white">{release_date}</p>
                </aside>
                
            </span>
        </div>
        {/* <img className="h-[200px] w-fit  rounded-xl" src={`https://image.tmdb.org/t/p/original${backdrop_path}`}alt="" /> */}
       
    </Link>
  )
}
