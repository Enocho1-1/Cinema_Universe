import load from "../../assets/giphy.gif"

export const Loader = () => {
  return (
   <div className="absolute top-0 left-0 z-40 min-h-[100%] w-full overflow-y-hidden flex justify-center bg-black">
    <img src={load} className="" alt="" />
   </div>
  )
}
