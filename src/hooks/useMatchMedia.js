/* eslint-disable */
import { useState, useEffect } from "react"

export const useMatchMedia = (value) => {

    const [myQuery, seyMyQuery ] = useState({
        matches: window.innerWidth < value ? true : false
      })
    
      useEffect(() => {
        let mediaQuery = window.matchMedia(`(max-width:${value}px)`)
        mediaQuery.addEventListener("change",  seyMyQuery)
      },[])

  return { myQuery }
}
