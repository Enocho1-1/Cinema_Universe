import { render,screen, waitFor } from "@testing-library/react"
import { CarouselSlide } from "../Home/components/CarouselSlide" 
import { BrowserRouter } from 'react-router-dom';

describe("Render Poster Carousel correctly ", () => {

    test("Test Carousel Slide render", async () => {
      
        render(<CarouselSlide />, {wrapper: BrowserRouter})
        
        await waitFor(() => {
            const CarouselSlide = screen.getByTestId("poster-carousel")
            expect(CarouselSlide).toBeTruthy()
        })
       
    })
})