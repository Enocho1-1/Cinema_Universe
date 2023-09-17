import load from "../../assets/giphy.gif"

export const Loader = () => {
  return (
   <main className="absolute top-0 left-0 z-40 h-screen w-screen overflow-hidden flex justify-center bg-black">
    <img src={load} className="" alt="" />
   </main>
  )
}
