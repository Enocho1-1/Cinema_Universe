import notFound from "../../assets/notFound.gif"

export const PageNotFound = () => {
  return (
    <div className="my-8 flex flex-col justify-center items-center">
      <h1 className="text-primary-blue font-semibold text-4xl max-tablet:text-2xl">Movie or TV Show Not Found😢</h1>
      <img src={notFound} className="mt-8" alt="" />
    </div>
  )
}
