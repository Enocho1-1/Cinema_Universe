import { useEffect,useState } from "react"
import { Carousel } from "flowbite-react"
import { CarouselSlide } from "./CarouselSlide"

export const DefaultCarousel = () => {

    const [data, setData] = useState([])

    

    useEffect(() => {
        try{
            const fetchData = async () => {
              
                const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b80d59c33d6d57ed9c7e3713f91c188a')
                const result = await response.json()
                const array = result.results.slice(0,9)
                setData(array )
            }
            fetchData()
        } catch(error){
            console.log(error)
        }
       
    },[])
   
  return (
    <div className=" CarouselContain">
        <Carousel>
           { data.map( (item, index) => (
            <CarouselSlide key={index} item= {item}/>
           ))}
        </Carousel>
    </div>
  
  )
}
