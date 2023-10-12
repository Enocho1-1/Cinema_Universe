import { useQuery } from "react-query"

export const useWatchList = () => {
    
    const userToken = JSON.parse(sessionStorage.getItem("token"))
    const userID = JSON.parse(sessionStorage.getItem("userID"))

    const options = {
    method: 'GET',
    headers:{ "Content-Type": "application/json", Authorization: `Bearer ${userToken}`}
    }

    const fetchWatchList = async () => {
        try{
            const response = await fetch(`http://localhost:32000/660/orders/${userID}`, options)
            if(!response.ok){
                throw new Error(`${response.status}`)
            } else {
                const result = await response.json()
                return result
            }
        }catch(error){
            throw new Error(error.message)
        }
    }

    const { isLoading, error, data} = useQuery("watchList", fetchWatchList)

    if(error){
        throw new Error(error.message)
    }
  return {data,isLoading}
}
