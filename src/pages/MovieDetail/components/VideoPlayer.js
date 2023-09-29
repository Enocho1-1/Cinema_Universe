/* eslint-disable */
import { useState,useEffect } from "react"
import collage from "../../../assets/movieCollage.jpg"
import play from "../../../assets/play-button.png"
import gif from "../../../assets/giphy(2).gif"

export const VideoPlayer = ({backdrop}) => {
    const [playbutton, setPlayButton] = useState(false)
    const backdropImage = `https://image.tmdb.org/t/p/original/${backdrop}`

    useEffect(() => {setPlayButton(false)},[backdrop])
  return (
        <section className="relative h-[100vh] max-mobileLg:h-[55%] w-full" style={ {
                backgroundImage: `url( ${backdrop ? backdropImage : collage})`,
                backgroundSize:"cover",
                backgroundRepeat: "no-repeat"
        }}>
            <aside  className="relative flex justify-center items-center" id="overlay">

            <button onClick={() => setPlayButton(!playbutton)} className=""><img src={play} className="h-[35px] w-[35px]" alt="" /></button>
            { playbutton && 
            // Video Player
                <div className="absolute top-[25%]  h-[500px] w-[900px] flex justify-center items-center bg-black">
                <img src={gif} alt="" />
                </div>
            }
            
            </aside>
    </section>
  )
}
