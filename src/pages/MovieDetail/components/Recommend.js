import { RecommendCard } from "./RecommendCard"
import play from "../../../assets/play-button.png"


export const Recommend = ({list,type}) => {
  return (
    <>
        { list.length === 0 ? "" : (
                    <div className=" flex flex-col max-lg:items-center max-lg:my-8 ">
                      <h1 className="font-bold text-4xl max-xl:text-3xl text-gray-300 flex"><img src={play} className="h-6 self-center mr-2"/>Recommended</h1>
                      
                      <aside className="mt-4 flex flex-col max-lg:grid max-lg:grid-cols-fiveCols  h-[350px] w-auto overflow-y-scroll overflow-x-hidden">
                        { list.map( (item,index )=> (
                            <RecommendCard key={index} item={item} type={type}/>
                        ))}
                
                      </aside>
                    </div>
                    )}
                
    </>
  )
}
