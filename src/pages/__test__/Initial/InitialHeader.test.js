import { render,screen } from "@testing-library/react";
import { InitialHeader } from "../../Initial/components";
import { BrowserRouter } from "react-router-dom";

describe("Test Initial Welcome Page Header", () => {
    
    test("renders welcome header elements correctly", () => {
        render(<InitialHeader />, {wrapper: BrowserRouter})

        const heading = screen.getByTestId("heading")

        expect(heading.innerHTML).toBe("Cinema-U")
    })
})