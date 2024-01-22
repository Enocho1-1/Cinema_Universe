/* eslint-disable */
import { useState,useEffect } from "react"
import { fetchMovieOrTV,fetchRecommended } from "../utility"

export const useMovieTV = (id) => {
    const type = JSON.parse(sessionStorage.getItem("type"))
    const [info, setInfo] = useState([])
    const [recommend , setRecommend] = useState([])

    useEffect(() => {
 
        try{
         fetchMovieOrTV(type,id,setInfo)
         fetchRecommended(type,id,setRecommend)
        }catch(error){
          throw new Error(error.message)
        }
        
      },[id])

    return {info,recommend,type}
    }