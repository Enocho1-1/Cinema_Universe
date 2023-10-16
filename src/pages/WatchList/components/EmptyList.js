import empty from "../../../assets/empty.gif"
export const EmptyList = () => {
  return (
    <main className='relative overflow-x-hidden'>
      <section className=" flex flex-col items-center py-4">
        <img src={empty} className="h-[250px] w-[250px]" alt="" />
        <h1 className="mt-4 font-semibold text-2xl text-gray-300 ">Your watch list is empty ‼️</h1>
      </section>
    </main>
  )
}
