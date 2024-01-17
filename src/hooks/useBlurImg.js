import { useEffect,useState } from "react"


export const useBlurImg = (src) => {
    const [imgloaded, setImgloaded] = useState(false)

    useEffect(() => {
        const image = new Image()
        image.onload = () => {
            setImgloaded(true)
        }
        image.src = src
    },[src])
  return {imgloaded}
}
