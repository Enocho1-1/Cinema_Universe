import { useEffect } from "react"
import { useWatch } from "../context/WatchContext"
import { updateWatchList } from "../utility"

export const useUpdateUser = () => {
    const { list,retrieveUserData } = useWatch()
    useEffect(() => {
        updateWatchList(list,retrieveUserData) 
    },[list,retrieveUserData])
  return null
}
