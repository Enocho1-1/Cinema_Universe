import { render,screen } from "@testing-library/react";
import { WelcomePage } from "../../Initial/WelcomePage";
import { BrowserRouter } from "react-router-dom";

describe("Test Welcome Page", () => {

    test("Test Welcome Page html elements", () => {
        render(<WelcomePage />, {wrapper: BrowserRouter})

        const welcomeContainer = screen.getByTestId("welcome-container")
        const overlayContainer = screen.getByTestId("overlay-container")

        expect(welcomeContainer).toBeTruthy()
        expect(overlayContainer).toBeTruthy()
    })
})