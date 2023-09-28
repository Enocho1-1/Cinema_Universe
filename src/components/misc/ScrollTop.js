import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const ScrollTop = () => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0,10)
    },[location.pathname])

  return null
}
