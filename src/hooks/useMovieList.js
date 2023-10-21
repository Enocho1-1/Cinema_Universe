import { useFetch } from "./useFetch"
import { useFetchTwo } from "./useFetchTwo"
import { useFetchThree } from "./useFetchThree"

export const useMovieList = (apiPath) => {
    const {data : dataOne} = useFetch(apiPath)
    const {data : dataTwo} = useFetchTwo(apiPath)
    const {data : dataThree} = useFetchThree(apiPath)

    // Combine Movie List
    const combineData = [...dataOne,...dataTwo, ...dataThree]
  return { combineData }
}
