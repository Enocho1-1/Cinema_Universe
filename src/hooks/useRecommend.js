import { useState,useEffect } from "react"

export const useRecommend = (data,id) => {
    const [recommendList , setRecommend]  =useState([])
    const path = data === "MOVIE" ? `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=b80d59c33d6d57ed9c7e3713f91c188a`: `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=b80d59c33d6d57ed9c7e3713f91c188a`
    useEffect(() => {
        try{
            const fetchRecommended = async () => {
                const response = await fetch(path)
                const result = await response.json()
                setRecommend(result.results)
            }
            fetchRecommended()
        }catch(error){
            console.log(error.message)
        }
    },[])
  return { recommendList }
}
