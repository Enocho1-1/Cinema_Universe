
import { useQuery } from 'react-query';
import { Loader } from "../../../components"
import { Carousel } from "flowbite-react"
import { CarouselSlide } from "./CarouselSlide"

export const DefaultCarousel = () => {
 
    // Async Function
    const fetchData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b80d59c33d6d57ed9c7e3713f91c188a')
        if(!response.ok){
          throw new Error(`${response.status}`)
        } else {
          const result = await response.json()
          const array = result.results.slice(0,10)
        
          return array
        }
        
    }

    // Use Query Initialize
    const { isLoading, error, data } = useQuery("backdrop", fetchData)
    
    if(error){
        console.log(error)
    }
   
  return (
    <div className=" CarouselContain">
        {
        isLoading 
        ? 
        <Loader/>
        :
        ( <Carousel>
            { data.map( (item, index) => (
             <CarouselSlide key={index} item= {item} type="MOVIE"/>
            ))}
         </Carousel>)
    }

       
    </div>
  
  )
}
