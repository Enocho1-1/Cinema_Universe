import collage from "../../../assets/mermaid.png"
import star from "../../../assets/star.png"

export const Trending = () => {
  return (
    <div className="trendingBtn my-[50px] px-2 flex justify-evenly flex-wrap">
        <button className=" relative h-[165px] w-[350px] rounded-xl mx-4">
            <img className="h-fit w-fit  rounded-xl z-[-10]" src={collage} alt="" />
            <span className="absolute px-2 top-[60%] left-0">
                <h1 className="font-sans text-xl font-semibold text-gray-200">Movie Title</h1>
                <aside className="m-2 flex">
                    <img src={star} className="h-4 ml-2 self-center" alt="" />
                    <p className="ml-2 text-sm text-gray-200">7.5/10</p>
                    <p className="ml-2 text-sm text-gray-200">2023</p>
                </aside>
                
            </span>
        </button>
        {/* <button className=" h-[165px] w-[325px] rounded-xl mx-4 bg-blue-700"></button>
        <button className=" h-[165px] w-[325px] rounded-xl mx-4 bg-blue-700"></button>
        <button className=" h-[165px] w-[325px] rounded-xl mx-4 bg-blue-700"></button> */}
    
    </div>
  )
}
