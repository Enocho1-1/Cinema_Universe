
/* eslint-disable */
export const Pagination = ({list,postperPage,changePage}) => {
    const array = []

 
    for(let i = 1; i <= Math.ceil(list/postperPage); i++){
        array.push(i)
    }


  return (
    <>
    <nav aria-label="Page navigation example" className="mt-6 flex justify-center">
      <ul className="inline-flex -space-x-px text-sm">
        { array.map( number => (
            <li key={number}>
              <a href="#top " onClick={() => {changePage(number)}} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-500 active:bg-slate-800">{number}</a>
            </li>
        ))}
      
      </ul>
    </nav>

    </>
  )
}
