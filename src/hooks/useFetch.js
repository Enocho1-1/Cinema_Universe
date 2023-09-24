/* eslint-disable */
import { useState, useEffect } from "react"

export const useFetch = (apipath) => {
    const [data, setData] = useState([])

    useEffect(() => {
        try{
            const fetchData = async () => {
              
                const response = await fetch(`https://api.themoviedb.org/3/${apipath}?api_key=b80d59c33d6d57ed9c7e3713f91c188a&language=en-US&page=1&page=1`)
                const result = await response.json()
                setData(result)
            }
            fetchData()
        } catch(error){
            console.log(error)
        }
       
    },[])
  return { data }
}
