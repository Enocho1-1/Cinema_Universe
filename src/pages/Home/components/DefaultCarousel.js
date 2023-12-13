
import { useQuery } from 'react-query';
import { Loader } from "../../../components"
import { Carousel } from "flowbite-react"
import { CarouselSlide } from "./CarouselSlide"
import { fetchBackDrop } from '../../../utility';

export const DefaultCarousel = () => {
 
    // Async Function
    fetchBackDrop()
    // Use Query Initialize
    const { isLoading, error, data } = useQuery("backdrop", fetchBackDrop)
    
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
             <CarouselSlide key={index} item= {item} data-testid="poster-carousel" type="MOVIE"/>
            ))}
         </Carousel>
         )
    }

       
    </div>
  
  )
}
