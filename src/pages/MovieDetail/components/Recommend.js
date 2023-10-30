/* eslint-disable */
import { RecommendCard } from "./RecommendCard"
import play from "../../../assets/play-button.png"


export const Recommend = ({list,type}) => {
  return (
    <>
        { list.length === 0 ? "" : (
                    <div className=" flex flex-col  max-lg:my-8 ">
                      <h1 className="font-bold text-4xl max-mobile:text-center  max-xl:text-xl text-gray-300"><img src={play} className="h-6 mr-2 inline-block"/>Recommended</h1>
                      
                      <aside className="mt-4 flex flex-col h-[400px] w-auto overflow-y-scroll max-lg:h-fit max-lg:grid max-mobile:grid-cols-twoCols mobile:max-mobileLg:grid-cols-threeCols mobileLg:max-lg:grid-cols-fiveCols max-lg:overflow-y-hidden max-lg:gap-y-4  ">
                        { list.map( (item,index )=> (
                            <RecommendCard key={index} item={item} type={type}/>
                        ))}
                
                      </aside>
                    </div>
                    )}
                
    </>
  )
}
