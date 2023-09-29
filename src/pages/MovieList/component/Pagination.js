
/* eslint-disable */
export const Pagination = ({list,postperPage,changePage}) => {
    const array = []

 
    for(let i = 1; i <= Math.ceil(list/postperPage); i++){
        array.push(i)
    }


  return (
    <>
    <nav aria-label="Page navigation example" className="mt-6 flex justify-center">
      <ul className="inline-flex space-x-[10px] text-sm ">
        { array.map( number => (
            <li key={number}>
              <a href="#top" onClick={() => {changePage(number)}} className="flex rounded-lg items-center justify-center px-3 h-8 leading-tight text-gray-200 bg-primary-black border border-primary-blue hover:bg-secondary-blue active:bg-secondary-blue">{number}</a>
            </li>
        ))}
      
      </ul>
    </nav>

    </>
  )
}
