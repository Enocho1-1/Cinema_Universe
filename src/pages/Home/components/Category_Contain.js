

export const Category_Contain = ({children}) => {
  return (
    <div className="grid mt-[25px] px-4 grid-cols-sevenCols justify-center max-[600px]:grid-cols-twoCols min-[600px]:max-lg:grid-cols-threeCols  gap-x-[2px] gap-y-6 ">
        {children}
    </div>
  )
}
