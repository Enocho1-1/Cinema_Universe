/* eslint-disable */
import { useState, useEffect } from "react"

export const useMatchMedia = () => {

    const [myQuery, seyMyQuery ] = useState({
        matches: window.innerWidth < 769 ? true : false
      })
    
      useEffect(() => {
        let mediaQuery = window.matchMedia("(max-width:769px)")
        mediaQuery.addEventListener("change",  seyMyQuery)
      },[])

  return { myQuery }
}
