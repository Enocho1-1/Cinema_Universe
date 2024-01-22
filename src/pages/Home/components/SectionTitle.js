/* eslint-disable */
import { useNavigate } from "react-router"
import play from "../../../assets/play-button.png"

export const SectionTitle = ({title,path}) => {
    const navigate = useNavigate()
  return (
    <div className="max-w-[95%] flex justify-between max-[600px]:flex-col max-[600px]:items-center">
         <div className="w-[100%] flex justify-between max-[600px]:flex-col max-[600px]:items-center">
            <h1 className="font-bold text-4xl text-gray-300 flex ml-6 "><img src={play} className="h-8 self-center mr-2"/>{title}</h1>
            <button  onClick={() => navigate(`${path}`)} className="w-fit max-[600px]:mt-4  px-4 hover:text-primary-blue hover:border-primary-blue hover:bg-primary-blue/25 rounded-3xl border border-gray-400 text-gray-400 text-sm">View More <i className="bi bi-arrow-up-right"></i></button>
        </div> 
    </div>
  )
}
